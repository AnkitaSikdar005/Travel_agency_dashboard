import { useNavigate } from "react-router";

const PageLayout = () => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-light-200 min-h-screen flex flex-col"
            style={{
                backgroundImage: "url('/assets/images/background.png')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                {/* Enlarged Check Icon */}
                <img
                    src="/assets/icons/check.svg" // Replace with your logo path
                    alt="Success Icon"
                    className="h-15 w-15 mb-6 sm:h-28 sm:w-28 lg:h-32 lg:w-32" // Responsive sizes
                />
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-dark-100">
                            Welcome back to
                        </h2>
                        <img
                            src="/assets/icons/logo.svg" // Replace with your logo path
                            alt="Tourvisto Logo"
                            className="h-6 w-6 sm:h-8 sm:w-8"
                        />
                        <h2 className="text-xl sm:text-2xl font-semibold text-dark-100">
                            Tourvisto!
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base text-dark-400 mb-6">
                        Dive in to check the dashboard 🌍✨
                    </p>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 text-sm sm:text-base"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PageLayout;




