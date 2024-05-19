'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from 'next/router' for path comparison
import clsx from 'clsx';

export default function NavLinks() {
  const router = useRouter(); // Use useRouter hook to get the current route
  const links = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Profile', path: '/profile', icon: UserGroupIcon },
    // Add more link objects as needed
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.path} // Use link.path as the key
            href={link.path} // Use link.path as the href
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': router.pathname === link.path, // Compare router.pathname with link.path
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
