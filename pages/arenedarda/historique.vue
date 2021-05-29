<template>
<div class="container flex flex-col mx-auto w-full items-center justify-center">
    <div class="px-4 py-5 sm:px-6 w-1/2 border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Listes des matchs
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
            Cliquer pour récupérer le replay
        </p>
    </div>
    <ul class="flex flex-col">
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Equipe A
                    </div>
                    <div class="px-2 text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Equipe B
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    Thème (2vs2)
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Designer
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Charlie Moi
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/3.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        CEO
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Marine Jeanne
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        CTO
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Boby PArk
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</div>


</template>

<script>
export default {
  layout: "wars",
}
</script>

<style>

</style>