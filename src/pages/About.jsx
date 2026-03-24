import Layout from "../components/Layout";
import styles from "./About.module.css";

function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h6>Book finder project</h6>
        <p>
          This application is a simple and user-friendly book search tool that
          allows users to explore a wide range of books using an external API.
        </p>
        <p>
          You can search for books by title or keywords and instantly view a
          list of matching results. Each result displays key information such as
          the book title, author, and publication year.
        </p>
        <p>
          Users can save their favorite books to a bookmarks list for quick
          access later. In addition, each book can be opened in a detailed view,
          where more information is available, including descriptions, subjects,
          and other related data.
        </p>
        <h6>Technical Overview</h6>
        <p>
          This project was built using React and demonstrates modern front-end
          development practices.
        </p>
        <ul>
          <li>
            State management is handled using the Context API and custom hooks
            to avoid prop drilling
          </li>
          <li>
            Data is fetched asynchronously from an external API with proper
            loading and error handling
          </li>
          <li>
            A reusable modal system is implemented for displaying detailed book
            information
          </li>
          <li>
            The application is structured into reusable components with a clear
            separation of concerns
          </li>
          <li>
            Responsive design techniques are used to ensure usability across
            devices
          </li>
        </ul>
        <p>
          This project reflects my ability to build scalable and maintainable
          React applications.
        </p>
      </div>
    </Layout>
  );
}

export default About;
