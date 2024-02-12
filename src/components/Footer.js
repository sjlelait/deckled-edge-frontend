import React from 'react';

const Footer = (props) => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full text-center justify-between bg-mainPurple">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center justify-center p-2 lg:justify-between">
                    <div className="text-center">
                        <p className="text-sm">© Deckled Edge {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;