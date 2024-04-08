import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from './menuItemProps';
import styles from './menu.module.scss'; // Імпортуйте модульні стилі

export const MenuItem: React.FC<MenuItemProps> = ({ href, heading, description, active }) => {
    return (
        <Link href={href}>

            <div className={`${styles.menuItem} ${active ? styles.active : ''}`}>
                <h2 className={styles.menuHeading}>{heading}</h2>
                <p className={styles.menuDescription}>{description}</p>
            </div>
        </Link>
    );
};
