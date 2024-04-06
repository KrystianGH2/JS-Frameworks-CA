"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import usePaginationStore from "@/lib/utils/store";
import { useRouter } from "next/navigation";


export default function CheckOutDetails() {
  const { isModalOpen, toggleModalOpen, clearCart } = usePaginationStore();
  const router = useRouter();

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={toggleModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white rounded-lg flex flex-col justify-center overflow-hidden h-[250px] shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="px-4 py-5 w-full flex ">
                <div className="flex flex-col items-center w-full">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-full flex-1 pt-2">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900 flex justify-center items-center"
                    >
                      Thank you for your purchase!
                    </Dialog.Title>
                    <div className="mt-2 flex justify-center items-center">
                      <p className="text-sm text-gray-500 pt-2">
                        You will now be directed to Home page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex justify-center">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:ml-3 max-w-[300px] sm:text-sm"
                  onClick={() => {
                    clearCart();
                    toggleModalOpen();
                    setTimeout(() => {
                      router.push("/");
                    }, 1000);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
