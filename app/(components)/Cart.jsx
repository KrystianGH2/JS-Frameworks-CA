import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import usePaginationStore from "@/lib/utils/store";
import Link from "next/link";

export default function Cart() {
  const [productDiscount, setProductDiscount] = useState(false);
  const {
    total,
    products,
    removeItemMaxQuantity,
    clearCart,
    addToCart,
    removeItem,
    count,
  } = usePaginationStore((state) => ({
    total: state.total,
    products: state.items,
    removeItemMaxQuantity: state.removeItemMaxQuantity,
    clearCart: state.clearCart,
    addToCart: state.addToCart,
    removeItem: state.removeItem,
    count: state.count,
  }));
  const { isOpen, toggleOpen } = usePaginationStore();

  return (
    <Transition.Root show={isOpen} as={Fragment} onClose={toggleOpen}>
      <Dialog as="div" className="relative z-10" onClose={toggleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleOpen}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product?.image?.url}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a
                                          href={`/Product/${product.id}?title=${product.title}`}
                                        >
                                          {product.title}
                                        </a>
                                      </h3>
                                      <div className="flex items-center ">
                                        <div className="flex items-center">
                                          {product.price ===
                                            product.discountedPrice && (
                                            <>
                                              <p>{product.price}</p>
                                            </>
                                          )}
                                          {product.price !==
                                            product.discountedPrice && (
                                            <>
                                              <p className=" flex gap-2 text-red-500">
                                                <s className="text-gray-400">
                                                  {product.price}
                                                </s>
                                                {product.discountedPrice}
                                              </p>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>

                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex gap-4">
                                      <button
                                        type="button"
                                        className="font-medium text-black hover:text-black"
                                        onClick={() => removeItem(product)}
                                      >
                                        <MinusIcon className="h-6 w-6" />
                                      </button>

                                      <button
                                        type="button"
                                        className="font-medium  text-black hover:text-black"
                                        onClick={() => addToCart(product)}
                                      >
                                        <PlusIcon className="h-6 w-6" />
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          removeItemMaxQuantity(product)
                                        }
                                        type="button"
                                        className="font-medium text-red-500 hover:underline"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={clearCart}
                          className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-500 w-full"
                        >
                          Clear Cart
                        </button>
                      </div>
                      <div className="mt-6">
                        {count <= 0 ? (
                          <Link
                            href="/CheckOutPage"
                            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                          >
                            Checkout
                          </Link>
                        ) : (
                          <Link
                            disabled
                            href="/CheckOutPage"
                            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                          >
                            Checkout
                          </Link>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={toggleOpen}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
