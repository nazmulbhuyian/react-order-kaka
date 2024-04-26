/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import "./OrderView.css";

const OrderView = ({ setIsViewOpen, isViewData }) => {
  const handlePrint = () => {
    const printContent = document.getElementById("invoicePrintArea");
    const originalBody = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;

    window.print();

    // Restore the original content after printing
    document.body.innerHTML = originalBody;

    // Reload the page after printing
    setTimeout(() => {
      location.reload();
    }, 10);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[1000px] p-6 max-h-[100vh] overflow-y-auto">
          <div className="flex items-center justify-between">
            <h3
              className="text-[26px] font-bold text-[#0A0A0A] capitalize"
              id="modal-title"
            >
              {" "}
              Order Information{" "}
            </h3>
            <button className="btn bg-white hover:bg-white border p-1">
              <RxCross1
                onClick={() => setIsViewOpen(false)}
                size={25}
              ></RxCross1>
            </button>
          </div>
          {/* start */}

          <div
            className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
            data-open="click"
            data-menu="vertical-menu-modern"
            data-col=""
          >
            <div className="app-content content ">
              <div className="content-overlay"></div>
              <div className="header-navbar-shadow"></div>
              <div className="content-wrapper">
                <div className="content-body">
                  <section>
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <div id="invoicePrintArea">
                                <div className="my-page page" size="A4">
                                  <div className="invoice__body">
                                    <div className="customer__info">
                                      <ul>
                                        <li>
                                          <h4>
                                            OrderId :{" "}
                                            <span>{isViewData?.order_id}</span>
                                          </h4>
                                        </li>
                                        <li>
                                          <h4>
                                            Customer Name :{" "}
                                            <span>
                                              {isViewData?.user_name}
                                            </span>
                                          </h4>
                                        </li>
                                        <li>
                                          <h4>
                                            Date :{" "}
                                            <span>
                                              {
                                                isViewData?.date
                                              }
                                            </span>
                                          </h4>
                                        </li>
                                        <li>
                                          <h4>
                                            Customer Phone :{" "}
                                            <span>{isViewData?.user_phone}</span>
                                          </h4>
                                        </li>
                                        <li>
                                          <h4>
                                            Status :{" "}
                                            <span>
                                              {isViewData?.status}
                                            </span>
                                          </h4>
                                        </li>
                                        <li>
                                          <h4>
                                            Customer Address :{" "}
                                            <span>{isViewData?.user_address}</span>
                                          </h4>
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      className="table__space najmul overflow-x-auto"
                                      style={{
                                        paddingBottom: "20px",
                                        borderTop: "1px solid #ddd",
                                        marginTop: "50px",
                                        paddingTop: "20px",
                                        borderBottom: "1px solid #ddd",
                                        marginBottom: "20px",
                                      }}
                                    >
                                      <table className="min-w-full divide-y-2 divide-gray-200 text-sm mb-10">
                                        <thead>
                                          <tr>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                              Item Name
                                            </th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                              Unit Price
                                            </th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                              Quantity
                                            </th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                              Color
                                            </th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                              Total
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                          {
                                            isViewData?.products?.map((product, index) => <tr key={index}>
                                              <td className="whitespace-nowrap px-4 py-2 font-semibold">
                                                {product?.product}
                                              </td>
                                              <td
                                                className={`whitespace-nowrap px-4 py-2 font-semibold`}
                                              >
                                                {product?.price}
                                              </td>
                                              <td className="whitespace-nowrap px-4 py-2 font-semibold">
                                                {product?.quantity}
                                              </td>

                                              <td
                                                className={`whitespace-nowrap px-4 py-2 font-semibold`}
                                              >
                                                {product?.color}
                                              </td>

                                              <td
                                                className={`whitespace-nowrap px-4 py-2 font-semibold`}
                                              >
                                                {product?.price * product?.quantity}
                                              </td>
                                            </tr>)
                                          }

                                        </tbody>
                                      </table>
                                    </div>

                                    <h2 className="text-xl font-semibold text-sky-500 text-end mb-3">
                                      Total Product Price:{" "}
                                      {isViewData?.products?.reduce(
                                        (totalPrice, product) =>
                                          totalPrice + parseInt(product.price) * parseInt(product.quantity),
                                        0
                                      )}
                                    </h2>

                                    <h2 style={{ textAlign: "center" }}>
                                      Thank You !
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-center px-3 my-1">
                              <div className="mb-1 pb-1">
                                <button
                                  type="button"
                                  onClick={() => handlePrint()}
                                  className="btn bg-sky-500 hover:bg-sky-400 px-4 py-2 text-white border rounded-lg"
                                >
                                  Print
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </>
  );
};

export default OrderView;
