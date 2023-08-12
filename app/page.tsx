import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen mx-a bg-gray-100">
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to my website!
          </h1>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Get in touch with us!</h2>
            <p className="text-lg mb-4">
              Have any questions or just want to say hello?
            </p>
            <Link href="/chat">Start chatting now</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
