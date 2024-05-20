import ThreeDCard from './ThreeDCard';
const ConnectWithMe = () => {
    return (
        <ThreeDCard>
      <section id="connect" className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Connect with<span className="text-blue-800"> Me.</span></h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.578 0-.286-.01-1.042-.015-2.047-3.338.728-4.042-1.613-4.042-1.613-.546-1.385-1.332-1.754-1.332-1.754-1.087-.743.084-.727.084-.727 1.202.084 1.835 1.235 1.835 1.235 1.07 1.835 2.808 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.468-2.383 1.235-3.222-.123-.305-.534-1.528.117-3.18 0 0 1.008-.322 3.3 1.23A11.45 11.45 0 0112 5.803c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.653 1.652.242 2.875.12 3.18.77.84 1.235 1.913 1.235 3.222 0 4.607-2.807 5.624-5.48 5.92.43.37.81 1.1.81 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.21.694.825.575C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.575 1.7-1.482 2.048-2.565-.9.534-1.898.922-2.958 1.13-.85-.9-2.067-1.463-3.417-1.463-2.587 0-4.69 2.1-4.69 4.687 0 .37.045.73.12 1.076-3.892-.195-7.348-2.057-9.66-4.893-.403.733-.63 1.575-.63 2.476 0 1.708.87 3.214 2.2 4.096-.807-.026-1.566-.25-2.23-.63v.06c0 2.385 1.698 4.374 3.946 4.83-.416.11-.854.17-1.305.17-.32 0-.63-.03-.937-.088.63 1.953 2.445 3.376 4.6 3.416-1.69 1.33-3.823 2.12-6.146 2.12-.4 0-.78-.025-1.17-.07 2.194 1.407 4.798 2.225 7.6 2.225 9.1 0 14.077-7.547 14.077-14.076 0-.214-.005-.426-.014-.637.962-.695 1.8-1.562 2.463-2.55l-.047-.02z" />
            </svg>
          </a>
         
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M1.75 3.24a2.49 2.49 0 01-2.48-2.48 2.49 2.49 0 112.48 2.48zm.14 1.59h-2.92V24h2.92V4.83zm10.61 0H9.42V24h2.92V15.64c0-2.39.44-4.76 3.45-4.76 3.02 0 3.08 2.49 3.08 4.92V24H22.8V15.03c0-5.09-1.1-9.03-7.14-9.03-2.93 0-4.64 1.54-5.41 3.03V4.83h-.1z" />
            </svg>
          </a>
          <a href="mailto:kennyamusa@gmail.com" className="text-white hover:text-blue-500 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.006l-11.8-7.9v16.4c0 1.655 1.345 3 3 3h17.6c1.655 0 3-1.345 3-3V5.105l-11.8 7.9zm0-10.006l11.8 7.895v-5.895c0-1.655-1.345-3-3-3h-17.6c-1.655 0-3 1.345-3 3v5.895l11.8-7.895z" />
            </svg>
          </a>
        </div>
      </section>
      </ThreeDCard>
    );
  };
  
  export default ConnectWithMe;
  