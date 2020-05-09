import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">About E-languages</h1>
                    <p class="lead">The Value of Learning Languages</p>
                    <br/>
                </div>
            </div>
            <div className="container">
                <h2 className="text-uppercase text-center">We Recognise Your Learning Goals</h2>
            <p>
                    E-languages is run by a team of multilingual language enthusiasts, all of whom have taken many language courses themselves. With passion for language learning the team is dedicated to helping anyone who wants to begin, to develop, or to fulfil their language level. In an increasingly globalised world people need a second or third language for work. Our language learning experts will answer any question you have about your language learning process.
            </p>
            <h2 className="text-uppercase text-center">Language Holidays</h2>
            <p>
                    Learning a language abroad is an important part of your language learning process. Whether you are looking for a general language course for adults, a professional course for business purposes, E-languages has a language courses abroad for you to choose from. We offer full immersion language courses in English, Spanish, French, German, Italian and Swedish.
            </p>
                <h2 className="text-uppercase text-center">Corporate Training</h2>
            <p>
                    At E-language Training we specialise in helping businesses and individuals throughout the world succeed in international markets. Each and every language course is unique, ensuring that your corporate language training goals are met.
            </p>
                <h2 className="text-uppercase text-center">Private Courses</h2>
                <p>E-Language offers private language tuition at all levels. We understand that combining learning a language with a busy schedule can be a challenge. All of our private language courses are flexible. So whether you choose to take an intensive course, weekly courses Skype course, you will see results in a short period of time.</p>

            <h2 className="text-uppercase text-center">TEFL</h2>
                <p>E-language TEFL (Teaching English as a Foreign Language) is an admissions and advice service for quality teacher training courses. We offer added extras to make the process much easier for you, applying easily via our online application process. </p>
            <h2 className="text-uppercase text-center">My E-language</h2>
            <p>
                    We hope you enjoy using E-languages! Login on Home Page to check your personal details, change your password, view your language course/s details and to check our updates. Please send us your feedback at any time should you have any queries or suggestions. 
            </p>
                <h2 className="text-uppercase text-center">Contact Us</h2>
                <p>Please use the form below to contact us and a consultant will reply as soon as possible.</p>
                <form>
                <div className="form-group">
                <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Language" />
                    </div>
                    <textarea className="form-control" rows="4" placeholder="Message"/>
                    <button type="submit" className="btn btn-secondary text-uppercase mt-3 mb-3">Send</button>
                </form>
            </div>
            

        </>
    )
}
export default AboutUs;