import React from 'react';

const StartPage = () => {
    return (
        <div>
<div class="container my-12 mx-auto md:px-6">
  <section class="mb-32 text-center lg:text-left">
    <div class="px-6 py-12 md:px-12">
      <div class="grid items-center lg:grid-cols-2 lg:gap-x-12">
        <div class="mb-12 lg:mb-0">
          <h2 class="my-12 text-5xl font-bold leading-tight tracking-tight">
            Are you ready <br />
            <span class="text-success dark:text-success-400">for an adventure?</span>
          </h2>
          <a class="mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
          <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:text-success-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
        </div>

        <div class="mb-12 lg:mb-0">
          <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/051.jpg"
            class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </section>
</div>
        </div>
    );
}

export default StartPage;
