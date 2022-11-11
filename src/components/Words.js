/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import { dummyData } from "./localData"
import words from "../brain.gif"
import logo from "../wordifylogo.png"

export default function Meal() {
  const [found, setFound] = useState(0)

  const imageClick = () => {
    let randomValue = Math.floor(Math.random() * (1323 - 1 + 1)) + 1

    const found = dummyData.find((element) => element.id === randomValue)

    setFound(found)

    // console.log(found)
  }

  return (
    <div className="container mx-auto font-poppins">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="hover:animate-pulse w-11/12 h-auto hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg antialiased rounded-r-lg"
            style={{
              backgroundImage: `url(${words})`,
            }}
          ></div>

          <div className="w-full  antialiased text-center align-middle justify-center lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center align-middle justify-center mx-2 sm:w-full">
              <center>
                <img
                  src={logo}
                  className=" hover:animate-bounce antialiased w-11/12 justify-center flex text-center sm:w-full "
                />{" "}
              </center>
              <p className="mb-4 mx-3 text-sm font-semibold antialiased text-gray-700">
                Get a random English word and Turkish equivalent😊
              </p>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 justify-center text-center flex">
                <label
                  className="mb-2 justify-center align-middle text-sm font-bold text-gray-700"
                  for="email"
                ></label>
                {found ? (
                  <>
                    <div className="hover:animate-pulse px-2 py-2 mb-3 w-3/4 align-middle justify-center  antialiased font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                      {" "}
                      <span className="text-left antialiased font-semibold justify-start">
                        English
                      </span>{" "}
                      <hr className="w-1/2 mx-auto antialiased justify-center flex text-center "></hr>
                      {found.word}
                    </div>
                    <div className="antialiased px-2 py-2 mb-3 w-3/4 align-middle justify-center font-semibold text-white bg-orange-500 rounded-full  hover:bg-orange-700 focus:outline-none focus:shadow-outline hover:animate-pulse">
                      <span className="text-left antialiased justify-start">
                        Turkish
                      </span>{" "}
                      <hr className="w-1/2 mx-auto antialiased justify-center flex text-center "></hr>
                      {found.turkish}
                    </div>
                  </>
                ) : (
                  <div className="px-2 py-2 mb-9 mt-1 antialiased w-3/4 align-middle justify-center font-semibold text-red-700 focus:outline-none focus:shadow-outline">
                    Click button to get a word
                  </div>
                )}
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={imageClick}
                >
                  Wordify!
                </button>
              </div>
              <hr className="mb-6 border-t" />
            </form>
            <div className="mb-6 text-center">
              <span className=" text-[10px] text-black antialiased font-semibold">
                made by{" "}
                <a
                  href="https://altug.dev"
                  className=" text-[10px] text-blue-500 hover:text-blue-700 antialiased font-semibold"
                >
                  altug.dev
                </a>{" "}
                with ❤️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
