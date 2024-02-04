import { Link, NavLink } from "react-router-dom";
import { LoginButton } from "../../components/LoginButton";
import { useLogin } from "../../authConfig";
import styles from "./Header.module.css";
import github from "../../assets/github.svg";

interface Props {
    logo: string;
}

export const Header = ({ logo }: Props) => {
    return (
        <header className={styles.header} role="banner">
            <div className={styles.headerContainer}>
                <Link to="/">
                    <img src={logo} alt="Company logo" aria-label="Link to company" className={styles.coLogo} />
                </Link>
                <nav>
                    <ul className={styles.headerNavList}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                Chat
                            </NavLink>
                        </li>
                        <li className={styles.headerNavLeftMargin}>
                            <NavLink to="/sources" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                Sources
                            </NavLink>
                        </li>
                        {/* <li className={styles.headerNavLeftMargin}>
                            <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                Ask a question
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
                {/* <h4 className={styles.headerRightText}>GPT Assistant</h4> */}
                <a href="https://github.com/charlie-hssrr/azure-search-openai-demo" target="_blank" rel="noopener noreferrer" title="Github repository link">
                    <img src={github} alt="Github logo" aria-label="Link to github repository" width="20px" height="20px" className={styles.githubLogo} />
                </a>

                {useLogin && <LoginButton />}
            </div>
        </header>
    );
};
