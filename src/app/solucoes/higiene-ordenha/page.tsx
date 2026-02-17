import HigieneOrdenhaContent from "./content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HigieneOrdenhaPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex-grow">
                <HigieneOrdenhaContent />
            </div>
            <Footer />
        </main>
    );
}
