import './FAQ.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const FAQ = () => {

    //language handler 
    const [language, setLanguage] = useState('english'); // Default language is English


    // Define video URLs based on the selected language

    const toggleLanguage = () => {
        // Toggle between English and French
        setLanguage(prevLanguage => prevLanguage === 'english' ? 'french' : 'english');
        console.log('Language:', language);
    };

    return (
        <div className='FAQ-page'>
            <div className='page-title-div'>
                <h1 className='page-title FAQ-title'>{language === 'english' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}</h1>

            </div>
            <div className='lang-button-div'>
                <button className='mobile-btn-lang' onClick={toggleLanguage}>Switch to {language === 'english' ? 'French' : 'English'}</button>
            </div>

            <div className='conent-section'>
                {/* question 1 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "If I want all my athletes to take this, how can I ensure they have completed the program?" : "Si je veux que tous mes athlètes suivent ce programme, comment puis-je m'assurer qu'ils l'ont terminé ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "There are two ways. After viewing all videos in order, athletes will receive a certificate of completion via the email address they used to register. If you would like further compliance tracking, you can contact us at" : "Il y a deux façons. Après avoir visionné toutes les vidéos dans l'ordre, les athlètes recevront un certificat de réussite à l'adresse e-mail qu'ils ont utilisée pour s'inscrire. Si vous souhaitez un suivi de la conformité supplémentaire, vous pouvez nous contacter à l'adresse"}</p>
                    </div>


                </div>
                {/* question 2 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Can we share these videos or download them?" : "Pouvons-nous partager ou télécharger ces vidéos ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "No, the rights to these videos exist on this online platform only. Of course, we welcome you to refer the link to watch to whomever you feel will benefit from this education." : "Non, les droits de ces vidéos sont réservés uniquement à cette plateforme en ligne. Bien sûr, nous vous encourageons à partager le lien de visionnage avec toute personne qui pourrait bénéficier de cette éducation."}</p>
                    </div>

                </div>
                {/* question 3 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Are there additional Safe Sport educational options for athletes?" : "Y a-t-il d'autres options éducatives Safe Sport pour les athlètes ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Yes. Three great organizations that provide Safe Sport training for various groups are the Coaching Association of Canada, Generation Safe, and The Respect Group. Please contact these organizations for more information about their offering." : "Oui. Trois excellentes organisations proposent une formation Safe Sport pour différents groupes : l'Association des entraîneurs du Canada, Generation Safe et The Respect Group. Veuillez contacter ces organisations pour plus d'informations sur leurs offres."}</p>
                    </div>

                </div>
                {/* question 4 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Can I make this educational program mandatory for my entire organization?" : "Puis-je rendre ce programme éducatif obligatoire pour toute mon organisation ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "This is an option that each organization can make. Please work with your direct organization leaders and request its implementation. We highly encourage you to do so." : "C'est une option que chaque organisation peut choisir. Veuillez travailler avec les responsables directs de votre organisation et demander sa mise en œuvre. Nous vous encourageons vivement à le faire."}</p>
                    </div>

                </div>
                {/* question 4  this card is going to be hidden untill clients are spoken too */}
                <div class="faq-card" style={{ display: 'none' }}>
                    <p class="question">{language === 'english' ? "Can I receive direct confirmation for compliance?" : "Puis-je recevoir une confirmation directe pour la conformité ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Safe Sport for Youth can provide a list of those from your organization who have completed the educational program for a small fee. The fee covers our administration costs. Please contact us at: (enter no rep email)" : "Safe Sport for Youth peut fournir une liste des personnes de votre organisation ayant terminé le programme éducatif moyennant des frais minimes. Les frais couvrent nos coûts d'administration. Veuillez nous contacter à l'adresse suivante : (entrer email no rep)"}</p>
                    </div>

                </div>
                <div className='sub-sections'>
                    <h4>{language === 'english' ? "IT related FAQs" : "FAQ informatiques"}</h4>


                </div>

                {/* question 5 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I can't seem to sign up or log in. How can I get help?" : "Je ne peux pas m'inscrire ou me connecter. Comment puis-je obtenir de l'aide ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "If you are having issues registering, signing up or logging in, please contact Safe Sport For Youths at: (enter contact info)" : "Si vous rencontrez des problèmes pour vous inscrire, vous connecter ou vous connecter, veuillez contacter Safe Sport For Youths à : (entrez les coordonnées de contact)"}</p>
                    </div>

                </div>

                {/* question 6 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I did not receive my certificate of completion. What can I do?" : "Je n'ai pas reçu mon certificat de réussite. Que puis-je faire ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "If you 'unlocked' and watched all videos the certification of completion was sent to the email address you used to register. Please ensure you check your spam or junk mail folders as they sometimes end up there. If you still can't find your certificate, please contact Safe Sport for Youth for further support at: (enter contact info)" : "Si vous avez 'débloqué' et regardé toutes les vidéos, le certificat de réussite a été envoyé à l'adresse e-mail que vous avez utilisée pour vous inscrire. Veuillez vous assurer de vérifier vos dossiers de spam ou de courrier indésirable car ils finissent parfois là-bas. Si vous ne trouvez toujours pas votre certificat, veuillez contacter Safe Sport for Youth pour obtenir un soutien supplémentaire à : (entrez les coordonnées de contact)"}</p>
                    </div>

                </div>

                <div className='sub-sections'>

                    <h4>{language === 'english' ? "General Questions" : "Questions Générales"}</h4>

                </div>

                {/* question 7 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Do I need my parent or guardian's permission before I watch these videos?" : "Ai-je besoin de la permission de mes parents ou de mon tuteur avant de regarder ces vidéos ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "We highly recommend talking with the trusted adults in your life before you watch these videos. Even better- watch together!If you are under 13 years old we strongly recommend you ask your parents before watching our videos." : "Nous recommandons fortement de parler avec les adultes de confiance dans votre vie avant de regarder ces vidéos. Encore mieux - regardez-les ensemble ! Si vous avez moins de 13 ans, nous vous recommandons vivement de demander l'autorisation de vos parents avant de regarder nos vidéos."}</p>
                    </div>

                </div>

                {/* question 8 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I loved this training and would like to share these videos on social media. Can I?" : "J'ai adoré cette formation et j'aimerais partager ces vidéos sur les réseaux sociaux. Puis-je le faire ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Please feel free to share your positive experience with Safe Sport for Youth and certificate of completion with others. These videos are not available for sharing outside of registered users of the website for legal reasons as well as the sensitivity of the topics covered. We encourage everyone to share a link to the Safe Sport for Youth website so others can learn too." : "N'hésitez pas à partager votre expérience positive avec Safe Sport for Youth et votre certificat de réussite avec d'autres. Ces vidéos ne sont pas disponibles pour être partagées en dehors des utilisateurs enregistrés du site Web pour des raisons légales ainsi que pour la sensibilité des sujets traités. Nous encourageons tout le monde à partager un lien vers le site Web Safe Sport for Youth pour que d'autres puissent aussi apprendre."}</p>
                    </div>

                </div>

                {/* question 9 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "How old do I have to be to view these videos?" : "Quel âge dois-je avoir pour regarder ces vidéos ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "These videos are aimed at the age range of 13-19, however if you are younger, please get permission from your parent or guardian  prior to viewing." : "Ces vidéos sont destinées à la tranche d'âge de 13 à 19 ans, cependant, si vous êtes plus jeune, veuillez obtenir l'autorisation de vos parents ou tuteurs avant de regarder."}</p>
                    </div>

                </div>

                {/* question 10 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I am not a competitive athlete, more just for fun, can I watch these videos too?" : "Je ne suis pas un athlète de compétition, je pratique juste pour m'amuser, puis-je regarder ces vidéos aussi ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Safety in sport is for everyone at every level of competition. Of course, we have developed these videos with the competitive athlete in mind, but all athletes can benefit from this educational program." : "La sécurité dans le sport est importante pour tous, quel que soit le niveau de compétition. Bien sûr, nous avons développé ces vidéos en pensant aux athlètes de compétition, mais tous les athlètes peuvent bénéficier de ce programme éducatif."}</p>
                    </div>

                </div>

                {/* question 11 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Why do I only see athletes from three sports in these videos?" : "Pourquoi ne vois-je des athlètes que de trois sports dans ces vidéos ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Safe Sport for Youth currently uses videos from volleyball, athletics, and swimming organizations that support and sponsor our programs. Abuse can occur in any sport at any level so we believe the content applies to virtually every sport and youth athlete." : "Safe Sport for Youth utilise actuellement des vidéos provenant d'organisations de volleyball, d'athlétisme et de natation qui soutiennent et parrainent nos programmes. Les abus peuvent survenir dans n'importe quel sport et à n'importe quel niveau, nous pensons donc que le contenu s'applique à pratiquement tous les sports et athlètes jeunes."}</p>
                    </div>

                </div>

                {/* question 12 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "Will these videos always be available if I take my time to watch?" : "Ces vidéos seront-elles toujours disponibles si je prends mon temps pour les regarder ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Yes. These videos will be accessible via your log in indefinitely. We do not plan to remove any content any time soon, but we may add new relevant content from time to time, so our program may expand in future. In order to get the most from the content we encourage athletes watch the videos as close together as possible to maximize the impact on learning." : "Oui. Ces vidéos seront accessibles via votre connexion indéfiniment. Nous n'avons pas l'intention de supprimer tout contenu de sitôt, mais nous pouvons ajouter de nouveaux contenus pertinents de temps en temps, donc notre programme pourrait s'étendre à l'avenir. Pour tirer le meilleur parti du contenu, nous encourageons les athlètes à regarder les vidéos aussi rapprochées que possible afin de maximiser l'impact sur l'apprentissage."}</p>
                    </div>

                </div>

                {/* question 13 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I have feedback I would like to give. How can I do that?" : "J'ai des commentaires à donner. Comment puis-je faire ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "At Safe Sport for Youth we are always happy to hear from our members. Your feedback allows us to modify and improve our educational programs so don't hold back on your comments. Please contact us at: (enter nso rep email)" : "À Safe Sport for Youth, nous sommes toujours heureux d'entendre nos membres. Vos commentaires nous permettent de modifier et d'améliorer nos programmes éducatifs, alors n'hésitez pas à nous faire part de vos commentaires. Veuillez nous contacter à : (entrer l'e-mail du représentant de l'organisme national sportif)"}</p>
                    </div>

                </div>

                {/* question 14 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "I have watched the videos and I feel I need support with how I am feeling. Can you help me?" : "J'ai regardé les vidéos et je ressens le besoin d'aide pour ce que je ressens. Pouvez-vous m'aider ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Our recommendation is to start by talking  to a trusted adult that you feel safe sharing with.  There are numerous groups and organizations out there that can also provide help and support. Please see our resource page for more information." : "Notre recommandation est de commencer par parler à un adulte de confiance avec qui vous vous sentez en sécurité pour partager. Il existe de nombreux groupes et organisations qui peuvent également fournir de l'aide et du soutien. Veuillez consulter notre page de ressources pour plus d'informations."} <Link className='custom-links' to="/resources"> (Resources)</Link></p>
                    </div>

                </div>

                {/* question 15 */}
                <div class="faq-card">
                    <p class="question">{language === 'english' ? "How did you choose which topics to cover?" : "Comment avez-vous choisi les sujets à traiter ?"}</p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>{language === 'english' ? "Safe Sport for Youth chose the topics based on what we see as the most important information that is impacting young athletes the most today. We work directly with youth education experts and specialist consultants to develop content that reflects today's challenges. Our program is designed to help young athletes to live safe and happier lives in sport." : "Safe Sport for Youth a choisi les sujets en fonction de ce que nous considérons comme les informations les plus importantes ayant le plus d'impact sur les jeunes athlètes aujourd'hui. Nous travaillons directement avec des experts en éducation des jeunes et des consultants spécialisés pour élaborer du contenu qui reflète les défis d'aujourd'hui. Notre programme est conçu pour aider les jeunes athlètes à vivre des vies sûres et plus heureuses dans le sport."}</p>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default FAQ;