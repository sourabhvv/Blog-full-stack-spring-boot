import React from 'react';

function Dashboard() {
  return (
    <section className="overflow-hidden">
      <div className="bg-orange-100 pt-20 pb-80 px-10 relative">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex gap-6">
          <div
            className="mt-20 rounded-3xl w-80 h-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 234, 194, 0.00) 0%, #FFC96D 100%)',
            }}
          ></div>
          <div
            className="rounded-3xl w-80 h-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 234, 194, 0.00) 0%, #FFC96D 100%)',
            }}
          ></div>
          <div
            className="rounded-3xl w-80 h-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 234, 194, 0.00) 0%, #FFC96D 100%)',
            }}
          ></div>
          <div
            className="mt-20 rounded-3xl w-80 h-80"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 234, 194, 0.00) 0%, #FFC96D 100%)',
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <p className="uppercase text-center font-bold font-heading text-sm text-orange-500 mb-6">Blog</p>
          <h1 className="text-center font-bold font-heading text-4xl lg:text-6xl max-w-md lg:max-w-4xl mx-auto pb-32 lg:pb-0">
            Discover the latest news, stories & insights
          </h1>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <a
          className="bg-white border border-gray-100 hover:border-orange-500 transition duration-200 shadow rounded-3xl transform -translate-y-1/2 flex flex-wrap"
          href="#"
        >
          <div className="w-full lg:w-1/2 px-8 lg:px-16 py-8">
            <div className="flex flex-col justify-center items-start h-full">
              <div className="py-1 px-3 rounded-md border border-gray-100 mb-4 text-sm font-medium text-gray-700">
                Productivity
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 max-w-sm">
                How to Learn Anything Faster and Master It
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">20 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle>
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative" style={{ height: '396px' }}>
              <div className="absolute top-0 left-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="155"
                  height="154"
                  viewBox="0 0 155 154"
                  fill="none"
                >
                  <path
                    d="M-34 79.9324V153.361C-34 153.714 -33.7141 154 -33.3615 154H17.62C17.9724 154 18.2585 153.714 18.2585 153.361V94.299C18.2585 55.5087 56.5087 17.2585 95.299 17.2585H154.361C154.714 17.2585 155 16.9724 155 16.62V-34.3615C155 -34.7139 154.714 -35 154.361 -35H80.9324C17.4572 -35 -34 16.4572 -34 79.9324Z"
                    fill="#FF7100"
                  ></path>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  className="rounded-br-3xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="154"
                  height="158"
                  viewBox="0 0 154 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#FF7100"
                  ></path>
                </svg>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover lg:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none"
                src="solstice-assets/images/blog/picture-large.png"
                alt=""
              />
            </div>
          </div>
        </a>
        <div className="relative h-16 -mt-48 lg:-mt-20 mb-16">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 h-px w-full"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-8 rounded-2xl bg-orange-50 border border-gray-200 text-lg lg:text-2xl font-bold font-heading whitespace-nowrap">
            Latest articles
          </div>
        </div>
        <div className="flex flex-wrap mb-8 -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <a href="#">
              <div className="bg-white border border-gray-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
                <div className="relative" style={{ height: '240px' }}>
                  <div className="absolute top-0 left-0 z-10">
                    <svg
                      className="rounded-tl-2xl"
                      xmlns="http://www.w3.org/2000/svg"
                      width="159"
                      height="156"
                      viewBox="0 0 159 156"
                      fill="none"
                    >
                      <path
                        d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                        fill="#FFF2D6"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 z-10">
                    <svg
                      className="rounded-br-2xl"
                      xmlns="http://www.w3.org/2000/svg"
                      width="154"
                      height="158"
                      viewBox="0 0 154 158"
                      fill="none"
                    >
                      <path
                        d="M193 76.0676V2.63851C193 2.28605 192.714 2 192.361 2H141.38C141.028 2 140.742 2.28605 140.742 2.63851V61.701C140.742 100.491 102.491 138.742 63.701 138.742H4.63851C4.28605 138.742 4 139.028 4 139.38V190.361C4 190.714 4.28605 191 4.63851 191H78.0676C141.543 191 193 139.543 193 76.0676Z"
                        fill="#FFF2D6"
                      ></path>
                    </svg>
                  </div>
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                    src="solstice-assets/images/blog/picture-1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between px-8 py-6 h-full">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold font-heading">Make your website famous in a short time</h2>
                    <p className="mb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis enim ut massa malesuada scelerisque.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-gray-500 text-sm">20 Jul 2023</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle>
                    </svg>
                    <p className="text-gray-500 text-sm">4 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the structure for additional blog posts */}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
