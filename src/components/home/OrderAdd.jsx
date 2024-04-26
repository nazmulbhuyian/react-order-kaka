import { Controller, useFieldArray, useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { BASE_URL } from "../../shared/base-url/BASE_URL";
import { toast } from "react-toastify";


const OrderAdd = ({ setIsOrderAdd }) => {

    const { register, control, reset, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            products: [
                { product: "", color: "", quantity: "", price: "" },
            ],
        },
    }); //get data in form

    const { fields, append, remove } = useFieldArray({
        control,
        name: "products",
    }); //products data handle

    // data post in backend
    const handleDataPost = async (data) => {
        const hasEmptySizeOrColor = data.products.some(
            (variation) =>
                variation.product === "" ||
                variation.product === null ||
                variation.product === undefined ||
                variation.color === "" ||
                variation.color === null ||
                variation.color === undefined ||
                variation.price === "" ||
                variation.price === null ||
                variation.price === undefined ||
                variation.quantity === "" ||
                variation.quantity === null ||
                variation.quantity === undefined
        );

        if (hasEmptySizeOrColor) {
            alert(
                "Error: Please fill in the all information in products."
            );
            return; // Stop the function
        }
        const sendData = {
            user_name: data?.user_name,
            user_phone: data?.user_phone,
            user_address: data?.user_address,
            date: data?.date,
            status: data?.status,
            order_id: data?.order_id,
            products: data?.products?.map((item) => ({
                product: item?.product,
                quantity: item?.quantity,
                price: item?.price,
                color: item?.color,
            })),
        };
        // fetch(`${BASE_URL}/order`, {
        //     method: "PATCH",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(sendData),
        // })
        //     .then((response) => response.json())
        //     .then((infoData) => {
        //         if (infoData?.success === true && infoData?.statusCode === 200) {
        //             toast.success("Login Successfull")
        //             reset()
        // setIsOrderAdd(false)
        //         } else {
        //             toast.error(infoData?.message)
        //         }
        //     }
        //     )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[1000px] p-6 max-h-[100vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h3
                        className="text-[26px] font-bold text-[#0A0A0A] capitalize"
                        id="modal-title"
                    >
                        {" "}
                        Order Add{" "}
                    </h3>
                    <button className="btn bg-white hover:bg-white border p-1">
                        <RxCross1
                            onClick={() => setIsOrderAdd(false)}
                            size={25}
                        ></RxCross1>
                    </button>
                </div>

                <form onSubmit={handleSubmit(handleDataPost)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
                        <div>
                            <label className="font-semibold" htmlFor="user_name">
                                {" "}
                                User Name<span className="text-red-500">*</span>{" "}
                            </label>
                            <input
                                placeholder="User Name...."
                                {...register("user_name", {
                                    required: "User Name is required",
                                })}
                                id="user_name"
                                type="text"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            />
                            {errors.user_name && (
                                <p className="text-red-600">{errors.user_name?.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="user_phone">
                                {" "}
                                User Phone<span className="text-red-500">*</span>{" "}
                            </label>
                            <input
                                placeholder="User Phone...."
                                {...register("user_phone", {
                                    required: "User Phone is required",
                                })}
                                id="user_phone"
                                type="text"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            />
                            {errors.user_phone && (
                                <p className="text-red-600">{errors.user_phone?.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="user_address">
                                {" "}
                                User Address<span className="text-red-500">*</span>{" "}
                            </label>
                            <input
                                placeholder="User Address...."
                                {...register("user_address", {
                                    required: "User Address is required",
                                })}
                                id="user_address"
                                type="text"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            />
                            {errors.user_address && (
                                <p className="text-red-600">{errors.user_address?.message}</p>
                            )}
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
                        <div>
                            <label className="font-semibold" htmlFor="order_id">
                                {" "}
                                Order Id<span className="text-red-500">*</span>{" "}
                            </label>
                            <input
                                placeholder="Order Id...."
                                {...register("order_id", {
                                    required: "Order Id is required",
                                })}
                                id="order_id"
                                type="text"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            />
                            {errors.order_id && (
                                <p className="text-red-600">{errors.order_id?.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="font-medium" htmlFor="status">
                                {" "}
                                Order Status{" "}
                            </label>
                            <select
                                {...register("status", {
                                    required: "Order Status is required",
                                })}
                                id="status"
                                className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-200 rounded-xl mt-2"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Confirm">Confirm</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-600">{errors.status?.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="date">
                                {" "}
                                Order Date<span className="text-red-500">*</span>{" "}
                            </label>
                            <input
                                placeholder="Order Date...."
                                {...register("date", {
                                    required: "Order Date is required",
                                })}
                                id="date"
                                type="date"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            />
                            {errors.date && (
                                <p className="text-red-600">{errors.date?.message}</p>
                            )}
                        </div>

                    </div>


                    <div className="mt-10 border p-5 border-gray-300 rounded-md">
                        <label className="font-semibold" htmlFor="ads_topBadge">
                            products:{" "}
                        </label>
                        {fields.map((variation, index) => (
                            <div
                                key={variation.id}
                                className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2"
                            >
                                <Controller
                                    name={`products[${index}].product`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="product..."
                                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                                        />
                                    )}
                                />
                                <Controller
                                    name={`products[${index}].color`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="color..."
                                            type="text"
                                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                                        />
                                    )}
                                />
                                <Controller
                                    name={`products[${index}].price`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="number"
                                            placeholder="Price..."
                                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                                        />
                                    )}
                                />
                                <Controller
                                    name={`products[${index}].quantity`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="number"
                                            placeholder="Quantity..."
                                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    className="mt-2 text-white transition-colors duration-300 transform bg-[#22CD5A] rounded-xl hover:bg-[#22CD5A]"
                                    onClick={() => append({})}
                                >
                                    +
                                </button>
                                {index > 0 && (
                                    <button
                                        type="button"
                                        className="mt-2 text-white transition-colors duration-300 transform bg-red-500 rounded-xl hover:bg-red-600"
                                        onClick={() => remove(index)}
                                    >
                                        -
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>


                    <div className="flex justify-end mt-6">
                        <button
                            type="Submit"
                            className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]"
                        >
                            Create
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default OrderAdd;