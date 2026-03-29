import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-4">
                    <p className="text-white hover:text-white/80 transition-colors">
                        Developed by Anwar Kornipalli
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
