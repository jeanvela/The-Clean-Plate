import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllOrdes } from "../../features/ordesSlice";

const OrderDashboard = () => {
    const dispatch = useDispatch()
    const {allOrdes:ordes} = useSelector(state => state.ordes)

    useEffect(() => {
        dispatch(getAllOrdes())
        console.log(ordes)
    },[dispatch])

    return (
        <>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Ordes</h1>
                        {
                            ordes && ordes.map(e => (
                                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                    <p className="text-base leading-4 text-gray-800">Order: {e._id}</p>
                                    <p className="text-sm leading-none text-gray-800">
                                        <span className="text-gray-300">Date:</span> {e.createdAt}
                                    </p>
                                    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                        <div className="pb-4 md:pb-8 w-full md:w-40">
                                            {
                                                e.products.map(product => (
                                                    <>
                                                        <img className="w-full hidden md:block" src={product.image} alt={product.name} />
                                                    </>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            {e.products.map(product => (
                                                <>  
                                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0"></div>
                                                    <p className="text-base leading-4 text-gray-800">Name: {product.name}</p>
                                                    <p className="text-base leading-4 text-gray-800">Category: {product.category}</p>
                                                    <p className="text-base leading-4 text-gray-800">Price: {product.price}</p>
                                                </>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold leading-4 text-gray-800">Country: {e.shipping.address.country}</p>
                                            <p className="text-base font-semibold leading-4 text-gray-800">Postal code: {e.shipping.address.postal_code}</p>
                                            <p className="text-base font-semibold leading-4 text-gray-800">Line: {e.shipping.address.line1}</p>
                                            <p className="text-base font-semibold leading-4 text-gray-800">Email: {e.shipping.email}</p>
                                            <p className="text-base font-semibold leading-4 text-gray-800">Name: {e.shipping.name}</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0"></div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${e.total}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDashboard