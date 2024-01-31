import './FAQ.css'
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='FAQ-page'>
            <div className='page-title-div'>
                <h1 className='page-title'> Frequently Asked Questions</h1>
            </div>

            <div className='conent-section'>
                {/* question 1 */}
                <div class="faq-card">
                    <p class="question">If I want all my athletes to take this, how can I ensure  they have completed the program? </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>There are two ways. After viewing all videos in order, athletes will receive a certificate of completion via the email address they used to register. If you would like further compliance tracking, you can contact us at " (enter email)
                        </p>
                    </div>
                </div>
                {/* question 2 */}
                <div class="faq-card">
                    <p class="question">Can we share these videos or download them? </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>No, the rights to these videos exist on this online platform only. Of course, we welcome you to refer the link to watch to whomever you feel will benefit from this education.
                        </p>
                    </div>
                </div>
                {/* question 3 */}
                <div class="faq-card">
                    <p class="question">Are there additional Safe Sport educational options for athletes? </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Yes. Three great organizations that provide Safe Sport training for various groups are the Coaching Association of Canada, Generation Safe, and The Respect Group. Please contact these organizations for more information about their offering.
                        </p>
                    </div>
                </div>
                {/* question 4 */}
                <div class="faq-card">
                    <p class="question">Can I make this educational  program mandatory for my entire organization?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>This is an option that each organization can make. Please work with your direct organization leaders and request its implementation. We highly encourage you to do so.
                        </p>
                    </div>
                </div>
                {/* question 4 */}
                <div class="faq-card">
                    <p class="question">Can I receive  direct confirmation for compliance?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Safe Sport for Youth can provide a list of those from your organization who have completed the educational program for a small fee. The fee covers our administration costs. Please contact us at: (enter no rep email)
                        </p>
                    </div>
                </div>
                <div className='sub-sections'>

                    <h4>
                        IT related FAQs
                    </h4>
                </div>

                {/* question 5 */}
                <div class="faq-card">
                    <p class="question">I can't seem to sign up or log in. How can I get help?

                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>If you are having issues registering, signing up or logging in, please contact Safe Sport For Youths at: (enter verdure info)
                        </p>
                    </div>
                </div>

                {/* question 6 */}
                <div class="faq-card">
                    <p class="question">I did not receive my certificate of completion. What can I do?

                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>If you "unlocked" and watched all videos the certification of completion was sent to the email address you used to register. Please ensure you check your spam or junk mail folders as they sometimes end up there. If you still can't find your certificate, please contact Safe Sport for Youth for further support at: (enter Verdures email)
                        </p>
                    </div>
                </div>

                <div className='sub-sections'>

                    <h4>
                        General Questions
                    </h4>
                </div>

                {/* question 7 */}
                <div class="faq-card">
                    <p class="question">Do I need my parent or guardian's permission before I watch these videos?

                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>We highly recommend talking with the trusted adults in your life before you watch these videos. Even better- watch together!If you are under 13 years old we strongly recommend you ask your parents before watching our videos.
                        </p>
                    </div>
                </div>

                {/* question 8 */}
                <div class="faq-card">
                    <p class="question">I loved this training and would like to share these videos on social media. Can I?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Please feel free to share your positive experience with Safe Sport for Youth and certificate of completion with others. These videos are not available for sharing outside of registered users of the website for legal reasons as well as the sensitivity of the topics covered. We encourage everyone to share a link to the Safe Sport for Youth website so others can learn too.
                        </p>
                    </div>
                </div>

                {/* question 9 */}
                <div class="faq-card">
                    <p class="question">How old do I have to be to view these videos?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>These videos are aimed at the age range of 13-19, however if you are younger, please get permission from your parent or guardian  prior to viewing.
                        </p>
                    </div>
                </div>

                {/* question 10 */}
                <div class="faq-card">
                    <p class="question">I am not a competitive athlete, more just for fun, can I watch these videos too?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Safety in sport is for everyone at every level of competition. Of course, we have developed these videos with the competitive athlete in mind, but all athletes can benefit from this educational program.
                        </p>
                    </div>
                </div>

                {/* question 11 */}
                <div class="faq-card">
                    <p class="question">Why do I only see athletes from three sports in these videos?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Safe Sport for Youth currently uses videos from  volleyball, athletics, and swimming organizations that support and sponsor our programs. Abuse can occur in any sport at any level so we believe the content applies to virtually every sport and youth athlete.
                        </p>
                    </div>
                </div>

                {/* question 12 */}
                <div class="faq-card">
                    <p class="question">Will these videos always be available if I take my time to watch?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Yes. These videos will be accessible via your log in indefinitely. We do not plan to remove any content any time soon, but we may add new relevant content from time to time, so our program may expand in future.In order to get the most from the content we encourage athletes watch the videos as close together as possible to maximize the impact on learning.
                        </p>
                    </div>
                </div>

                {/* question 13 */}
                <div class="faq-card">
                    <p class="question">I have feedback I would like to give. How can I do that?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>At Safe Sport for Youth we are always happy to hear from our members. Your feedback allows us to modify and improve our educational programs so don't hold back on your comments. Please contact us at: (enter nso rep email)
                        </p>
                    </div>
                </div>

                {/* question 14 */}
                <div class="faq-card">
                    <p class="question">I have watched the videos and I feel I need support with how I am feeling. Can you help me?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Our recommendation is to start by talking  to a trusted adult that you feel safe sharing with.  There are numerous groups and organizations out there that can also provide help and support. Please see our resource page for more information. <Link className='custom-links' to="/resources"> (Resources)</Link>
                        </p>
                    </div>
                </div>

                {/* question 15 */}
                <div class="faq-card">
                    <p class="question">How did you choose which topics to cover?
                    </p>
                    <div class="line-divider"></div>
                    <div class="answer">
                        <p>Safe Sport for Youth chose the topics based on what we see as the most important information that is impacting young athletes the most today. We work directly with youth education experts and specialist consultants to develop content that reflects today's challenges. Our program is designed to help young athletes to live safe and happier lives in sport.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;