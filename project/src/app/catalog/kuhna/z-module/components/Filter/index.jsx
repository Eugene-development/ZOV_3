
export default function Filter() {
  return (
    <section className="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
            <div className="relative px-4 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div
                className="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                <div>
                <nav
                    className="flex px-3 py-2 mb-10 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                    aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                        Главная
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">
                            Каталог
                        </a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                        Кухонные гарнитуры
                        </span>
                        </div>
                    </li>
                    </ol>
                </nav>
                <h5>
                    <span className="dark:text-white">Выберите подходящий критерий:</span>
                </h5>
                </div>
                <div
                className="flex flex-col items-start flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                    <button type="button"
                            className="flex items-center justify-center px-4 py-2 mb-16 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                        </svg>
                        Показать все варианты
                    </button>
                </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Brand</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="nokia">Nokia</option>
                <option value="sony">Sony</option>
                </select>
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Category</option>
                <option value="tablet">Tablet</option>
                <option value="phone">Phone</option>
                <option value="tv">TV</option>
                <option value="console">Console</option>
                </select>
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="silver">Silver</option>
                </select>
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Category</option>
                <option value="tablet">Tablet</option>
                <option value="phone">Phone</option>
                <option value="tv">TV</option>
                <option value="console">Console</option>
                </select>
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Sold by</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="nokia">Nokia</option>
                <option value="flowbite">Flowbite</option>
                </select>
                <select
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected>Return Policy</option>
                <option value="30-days">30 days</option>
                <option value="14-days">14 days</option>
                <option value="no-returns">No returns</option>
                </select>
            </div>
            <div className="items-center justify-between block w-full py-3 border-t dark:border-gray-700 md:flex">
                <div className="flex flex-wrap mb-4 md:mb-0">
                <div className="flex items-center w-full mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white md:w-auto md:mb-0">
                    Расположение:
                </div>
                <div className="flex items-center mr-4">
                    <input id="all-products" type="radio" value="" name="show-only"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="all-products" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Любое
                    </label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="sort-category" type="radio" value="" name="show-only"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="sort-category" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Прямая
                    </label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="sort-price" type="radio" value="" name="show-only"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="sort-price" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    "Г"-Образная
                    </label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="sort-state" type="radio" value="" name="show-only"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="sort-state" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    "П"-Образная
                    </label>
                </div>
                </div>

                <div>
                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button">
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>

                    Сбросить фильтр
                </button>
                <div id="actionsDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="actionsDropdownButton">
                    <li>
                        <a href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Mass Edit
                        </a>
                    </li>
                    </ul>
                    <div className="py-1">
                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Delete all
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
