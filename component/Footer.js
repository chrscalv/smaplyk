const Footer = () => {
    return (
        <>
            <div>
                <footer className="bg-white">
                    <div className="container mx-auto px-8">
                        <div className="w-full flex flex-col md:flex-row py-6">
                            <div className="flex-1 mb-6 text-black">
                                <img className="object-contain md:object-scale-down" width="110" height="110" src="/logo-sma.png" />
                            </div>
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Links</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Social</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500"><i class="fab fa-instagram"></i> Instagram</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500"><i class="fab fa-facebook"></i> Facebook</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500"><i class="fab fa-youtube"></i> YouTube</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Company</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <ul className="justify-center flex flex-">
                            <li className=" active px-md-3 px-2">
                                2021 © SMA PL | managed by <a className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="https://github.com/ChrstCalv"><i class="fab fa-github"></i> ChrstCalv</a>
                            </li>
                        </ul>
                    </div>

                </footer>


            </div>
        </>
    );
}

export default Footer;