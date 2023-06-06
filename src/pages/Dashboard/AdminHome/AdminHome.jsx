import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

// Bar chart
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

// Pie chart
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  // chart data
  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  // Bar chart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-11/12 overflow-auto">
      <h2
        style={{ fontFamily: "Cinzel, serif" }}
        className="text-3xl font-extrabold mb-4"
      >
        Hi {user.displayName}, Welcome Back!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center ms-20 lg:ms-0">
        <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-purple-500 to-pink-200 rounded-lg flex items-center justify-center">
          <div className="text-white text-4xl  lg:text-3xl xl:text-5xl mr-4 p-2">
            <FaWallet />
          </div>
          <div>
            <p className="text-white text-2xl xl:text-3xl font-bold">
              $ {stats.revenue ? stats.revenue : "0"}
            </p>
            <h2 className="text-white text-xl font-bold mb-2">Revenue</h2>
          </div>
        </div>

        <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-yellow-600 to-yellow-200 rounded-lg flex items-center justify-center">
          <div className="text-white text-5xl  lg:text-4xl xl:text-5xl mr-4">
            <FaUsers />
          </div>
          <div>
            <p className="text-white text-3xl font-bold">
              {stats.users ? stats.users : "0"}
            </p>
            <h2 className="text-white text-xl font-bold mb-2">Customers</h2>
          </div>
        </div>

        <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-pink-600 to-pink-200 rounded-lg flex items-center justify-center">
          <div className="text-white text-5xl  lg:text-4xl xl:text-5xl mr-4">
            <GiCook />
          </div>
          <div>
            <p className="text-white text-3xl font-bold">
              {stats.products ? stats.products : "0"}
            </p>
            <h2 className="text-white text-xl font-bold mb-2">Products</h2>
          </div>
        </div>

        <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-blue-500 to-blue-200 rounded-lg flex items-center justify-center">
          <div className="text-white text-5xl lg:text-4xl xl:text-5xl mr-4">
            <FaTruck />
          </div>
          <div>
            <p className="text-white text-3xl font-bold">
              {stats.orders ? stats.orders : "0"}
            </p>
            <h2 className="text-white text-xl font-bold mb-2">Orders</h2>
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 overflow-hidden">
        {/* Bar chart */}
        <div className="mx-auto">
          <BarChart
            width={350}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-1/2 mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend />
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    name={entry.category}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
