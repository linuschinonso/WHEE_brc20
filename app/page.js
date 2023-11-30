"use client";
import Image from "next/image";
import { Card, Text, Metric } from "@tremor/react";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [nav, setNav] = useState(true);
  return (
    <div className="bg-[#ffffffdc] dark" data-mode="dark">
      <nav class="bg-dark dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WHEE
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://x.com/Whee_Official_?t=rnLnINRiGdmkT-tab5rnmQ&s=09">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Us
              </button>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNav(!nav)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class={`items-center justify-between ${
              nav ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="">
        <main className="bg-[#ffffffdc] flex-1 w-full">
          <div className="flex items-center justify-center mt-5">
            <div class="flex col-auto justify-center gap-x-2 gap-y-3">
              <img class="w-[300px] h-[300px] ml-2 mr-2" src="./Whee1.jpg" />
              <br />
            </div>
          </div>
          <br />
          <div class="flex col-auto justify-center gap-x-2 gap-y-3">
            <p className="md:w-[50%] w-[80%]">
              $WHEE is the native BRC20 Meme coin of Bitcoin Ordinals. It was
              minted in 3 hours at the peak of gas{`>`}100 on May 10, and it has
              been 4 months now. Both Chinese and English communities have
              holders preaching on consensus, and their popularity in the entire
              Ordinals community is not low.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-col justify-center items-center">
              <h2 class="text-4xl font-bold mt-10 mb-8 flex justify-center">
                About
              </h2>
              <div class="flex justify-center gap-x-2 gap-y-3 mb-10">
                <img
                  class="w-[300px] h-[300px] ml-2 mr-2 banner"
                  src="./wheebanner.jpg"
                />
              </div>
              <div class="flex col-auto justify-center gap-x-2 gap-y-3 mb-5">
                <p className="md:w-[50%] w-[80%]">
                  $WHEE BRC20 meme community: WHEE Sled Dog was deployed on the
                  Ordinals protocol on May 10th. It was minted within 3 hours
                  and cost 1.5 million US dollars in gas fees. The total amount
                  is 21 million, the current price is 300 Satoshi (0.1U)
                  (2023.11.19), the market value is 2.1 million US dollars, the
                  currency holding address is 5180, and the community has been
                  running for more than 6 months.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex-col justify-center items-center">
              <h2 class="text-4xl font-bold mt-10 mb-8 flex justify-center">
                Whee Contract Information
              </h2>
              <div class="flex justify-center gap-x-2 gap-y-3 mb-10">
                <img
                  class="w-[300px] h-[300px] ml-2 mr-2 banner"
                  src="./wheebanner.jpg"
                />
              </div>
              <div class="flex col-auto justify-center gap-x-2 gap-y-3 mb-5">
                <p className="md:w-[50%] w-[80%]">
                  WHEE Contract ADDRESS ETH
                  0x2512c545A0117353e4E9aCDdfF860342640d3CF6 WHEE Contract
                  ADDRESS BSC 0x62238038abeae5a667cde8769e708c5a07d7addb
                </p>
              </div>
            </div>
          </div>
          {/* <div className="self-center items-center inline-block">
            <h3 className="ml-5 m-5">Contact Us</h3>
            <input className="w-[300px] self-center justify-center h-[40px] border-[1.8px] border-[grey] m-2 rounded-[5px]" />
            <br />
            <input className="w-[300px] self-center justify-center h-[40px] border-[1.8px] border-[grey] m-2 rounded-[5px]" />
            <br />
            <input className="w-[300px] self-center justify-center h-[40px] border-[1.8px] border-[grey] m-2 rounded-[5px]" />
            <br />
            <input
              type="button"
              value={"contact"}
              className="w-[300px] self-center justify-center h-[40px] border-[1.8px] border-[grey] m-2 rounded-[5px]"
            />
            <br />
          </div> */}
        </main>

        <footer class="bg-dark bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="#" class="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    Whee
                  </span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                    Resources
                  </h2>
                  <ul class="text-gray-500 text-gray-400 font-medium">
                    <li class="mb-4">
                      <a
                        href="https://twitter.com/WheeBRC20/status/1702941926536704202?t=Q_kcvSnpxbFfqWJj-epZGA&s=19"
                        class="hover:underline"
                      >
                        TwitterThread
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/WheeBRC20/status/1689737607499206659?t=9Pj43L_epnK_5Za5RHcakg&s=19"
                        class="hover:underline"
                      >
                        Video Tutorial
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                    Follow us
                  </h2>
                  <ul class="text-gray-500 text-gray-400 font-medium">
                    <li class="mb-4">
                      <a
                        href="https://t.me/WHEEGlobal"
                        class="hover:underline "
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/Whee_Official_?t=rnLnINRiGdmkT-tab5rnmQ&s=09"
                        class="hover:underline"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-500 text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" class="hover:underline">
                  designed by Linus Aziegwu
                </a>
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 hover:text-white"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span class="sr-only">Telegram</span>
                </a>
                <a
                  href="https://t.me/WHEEGlobal"
                  class="text-gray-500 hover:text-gray-900 hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://x.com/Whee_Official_?t=rnLnINRiGdmkT-tab5rnmQ&s=09"
                  class="text-gray-500 hover:text-gray-900 hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Wheebrc20</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
