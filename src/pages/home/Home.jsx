import { useEffect, useState } from "react";
import { BASE_URL } from "../../shared/base-url/BASE_URL";
import NoDataFound from "../../shared/noDataFound/NoDataFound";
import { IoEyeOutline } from "react-icons/io5";
import OrderView from "../../components/home/OrderView";
import OrderAdd from "../../components/home/OrderAdd";

const Home = () => {

    const [allOrder, setAllOrder] = useState([])
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isOrderAdd, setIsOrderAdd] = useState(false);
    const [isViewData, setIsViewData] = useState({});

    useEffect(() => {
        fetch(`/order.json`)
            //   fetch(`${BASE_URL}/order`)
            .then(res => res.json())
            .then(data => setAllOrder(data))
        // .then(data => setAllOrder(data?.data))
    }, []);


    // open view modal
    const handleView = (data) => {
        setIsViewData(data);
        setIsViewOpen(true);
    };

    return (
        <div>
            <h1 className="text-center my-5 text-yellow-500 font-bold text-3xl">All Order Here</h1>
            <div className="flex items-center justify-end mr-10 my-5">
            <button onClick={() =>setIsOrderAdd(true)} type="button" className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-lg text-white">Add Order</button>
            </div>
            {/* Table for showing data */}
            {
                // orders?.data?.length > 0 ?
                allOrder?.length > 0 ? (
                    <div className="mx-10 overflow-x-auto rounded bg-white">
                        <table className="min-w-full divide-y-2 divide-gray-200 text-sm border">
                            <thead>
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left border">
                                        Order ID
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left border">
                                        Name
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left border">
                                        Phone
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left border">
                                        Time
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left border">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 text-center font-medium text-gray-900 whitespace-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {allOrder?.map((order) => (
                                    <tr key={order?._id}>
                                        <td className="whitespace-nowrap px-4 py-2 font-semibold border">
                                            {order?.order_id}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 font-semibold border">
                                            {order?.user_name}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 font-semibold border">
                                            {order?.user_phone}
                                        </td>
                                        <td className={`whitespace-nowrap px-4 py-2 font-semibold border`}>
                                            {order?.date}
                                        </td>

                                        <td className={`whitespace-nowrap px-4 py-2 font-semibold border`}>
                                            {order?.status}
                                        </td>

                                        <td className="whitespace-nowrap px-4 py-2 space-x-1 flex items-center justify-center gap-4">
                                            <IoEyeOutline
                                                onClick={() => handleView(order)}
                                                className="cursor-pointer text-gray-500 hover:text-gray-300"
                                                size={25}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <NoDataFound />
                )
            }

            {isViewOpen && (
                <OrderView setIsViewOpen={setIsViewOpen} isViewData={isViewData} />
            )}
            {isOrderAdd && (
                <OrderAdd setIsOrderAdd={setIsOrderAdd} />
            )}
        </div>
    );
};

export default Home;