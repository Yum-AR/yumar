import React, { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import ProfileDropdown from './ProfileDropdown'
import AuthModal from './AuthModal'
import SignUpModal from './SignUpModal'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
const user = {
    name: 'Chlsea Hagon',
    email: 'chelseahagon@example.com',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com/o/icons%2Fperson.fill.svg?alt=media&token=d15cd625-303a-4a30-b9d0-b92849b925cd',
}

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

const NavBar: React.FC = () => {
    const [showAuthModal, setAuthModal] = useState(false);
    const [showSignUpModal, setSignUpModal] = useState(false);
    const { data: session } = useSession();
    const [open, setOpen] = useState();
    return (
        <>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="header"
                className={'bg-white shadow-sm lg:static lg:overflow-y-visible'}
            >
                {() => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link href="/">
                                            <img
                                                className="block h-8 w-auto"
                                                src="https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com/o/appicon.svg?alt=media&token=e1e697e6-eb8f-4f01-97f3-201ebd43b904"
                                                alt="Yummr Logo"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                {<div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                                        <div className="w-full">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                    <SearchIcon className="h-5 w-5 invisible text-gray-400" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full invisible bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm
                           placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1
                            focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400
                   hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Popover.Button>
                                </div>
                                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                                        <div>
                                            {
                                                session ?
                                                    (
                                                        <ProfileDropdown className="object-right-top"></ProfileDropdown>)
                                                    :

                                                    (<div className="md:inset-y-0 md:right-0 space-x-6">
                                                        <span className=" rounded-md shadow">
                                                            <button
                                                                type="button"
                                                                className="items-center px-4 py-2 border border-transparent text-base
                                 font-medium rounded-md text-[#FF6F43] bg-white hover:bg-gray-50"
                                                                onClick={() => setAuthModal(true)}
                                                            >
                                                                Log in
                                                            </button>
                                                            <AuthModal showAuthModal={showAuthModal} setAuthModal={setAuthModal} setSignUpModal={setSignUpModal} />
                                                        </span>
                                                        <span className="inline-flex rounded-md shadow">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-4 py-2 border border-transparent 
                                text-sm font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
                                 hover:bg-[#ee8c2a] focus:outline-none focus:ring-2 focus:ring-offset-2
                                  focus:ring-indigo-500"
                                                                onClick={() => setSignUpModal(true)}
                                                            >
                                                                Sign Up
                                                            </button>
                                                            <SignUpModal showSignUpModal={showSignUpModal} setSignUpModal={setSignUpModal} setAuthModal={setAuthModal} />
                                                        </span>
                                                    </div>
                                                    )
                                            }
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md
                       shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={active ? 'bg-gray-100' : 'block py-2 px-4 text-sm text-gray-700'}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                            <div className="border-t border-gray-200 pt-4 pb-3">
                                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400
                     hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                                    {userNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}
export default NavBar