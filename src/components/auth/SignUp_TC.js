import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Platform
} from 'react-native';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';

export default class SignUp_TC extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderButton2() {
        return <Button textButton="BACK" onPress={this.onGoBack.bind(this)} />;
      }

      onGoBack = () => {
        Actions.pop();
      };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.signupText3}>Terms of Service</Text>
                    <Text style={styles.signupText2}>
                        The RunTracker websites, related mobile applications and services (collectively, the
                        “Services”) are made available to you by RunTracker, Inc. subject to these Terms of Service
                        (the “Terms”) and in accordance with the RunTracker Privacy Policy (the “Privacy Policy”).
                        More information about the Services may be found at https://RunTracker.com. You agree to comply with
                         these Terms and any supplemental terms which RunTracker makes available to you on the Services which
                         shall form part of the Terms. BY ACCESSING, USING OR UPLOADING OR DOWNLOADING ANY INFORMATION OR MATERIALS
                         TO OR FROM THE SERVICES, OR BY INDICATING YOUR ASSENT TO THESE TERMS BY CREATING AN ACCOUNT, CLICKING “SIGN UP”
                          OR ANY SIMILAR MECHANISM, YOU ARE AGREEING TO THE THESE TERMS. IF YOU DO NOT AGREE TO THE THESE TERMS,
                          DO NOT ACCESS OR USE THE SERVICES. This agreement was written in English. To the extent a translated
                          version of the Terms conflict with the English version, the English version controls.
                        
                        If you access or use the Services on behalf of a company or other entity, you represent that
                         you have authority to bind such entity and its affiliates to these Terms and that it is fully
                          binding on them. In such case, the term “you” will refer to such entity and its affiliates. If you
                          do not have authority, you may not access or use the Services. These Terms contain disclaimers of
                          warranties and limitations on liability that may be applicable to you.
                        
                        The RunTracker Services cannot be provided and the agreement described in these Terms of Service
                        cannot be performed without RunTracker processing data about you, and other RunTracker members,
                        including your location data. Processing of the data you share with RunTracker, including location
                        data, is essential to the Services which we provide and a necessary part of our performance of the
                        agreement we have with you.
                        
                        Notice Regarding Dispute Resolution: These Terms contain provisions that govern how disputes
                         between you and RunTracker are resolved, including an agreement to arbitrate, which will,
                         unless you reside in the European Union, with limited exception, require you to submit claims
                         you have against us to binding and final arbitration and limit you to claims against RunTracker
                         on an individual basis, unless you opt-out in accordance with the instructions below.
 </Text>

                    <Text style={styles.signupText3}> Registration and Accounts </Text>

                    <Text style={styles.signupText2}>

                        The Services are intended solely for persons who are 13 years old or such higher age required in your country to use the Services. If you are under the legal age to form a binding contract in your jurisdiction, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
                        
                        To use the Services, you must register. You agree to: (a) provide true, accurate, current and complete information about yourself (“Member Data”) and (b) maintain and promptly update the Member Data. You agree that RunTracker may use your Member Data to provide Services that you access or use and as otherwise set forth in these Terms. If you provide any Member Data that is inaccurate or not current, or RunTracker has reasonable grounds to suspect that such Member Data is inaccurate or not current, RunTracker has the right to suspend or terminate your account and refuse current or future use of the Services. In consideration of your use of the Services, you represent that you are not a person barred from receiving services under the laws of any applicable jurisdiction.
                        
                        You are solely responsible for maintaining the confidentiality of the password associated with your account and for restricting access to your password, your computer and mobile device while logged into the Services. You accept responsibility for all activities that occur under your account or from your computer and mobile devices. We endeavor to use reasonable security measures to protect against unauthorized access to your account. We cannot, however, guarantee absolute security of your account, your Content (as defined below) or the personal information you provide, and we cannot promise that our security measures will prevent third-party “hackers” from illegally accessing the Services or its contents. You agree to immediately notify RunTracker of any unauthorized use of your account or password, or any other breach of security, and confirm that you understand all risks of unauthorized access to Member Data and any other information or content you provide to RunTracker.
                        
                        You may register for or log-in to your account via a third-party network, such as Facebook or Google. If you do so, you hereby authorize RunTracker to pre-populate the registration and other relevant information fields of your account and/or to use such third-party credentials to log you into your account. If you connect your account to a third-party network, you agree to comply with the terms and conditions and policies applicable to such third party.
                        
                        By virtue of certain of the Services connecting to the Google Maps API, you hereby agree to be bound by the Google Maps/Google Earth Additional Terms of Service (including the Google Privacy Policy) in connection with your use of such Services.
</Text>

                    <Text style={styles.signupText3}> Member Content and Conduct </Text>

                    <Text style={styles.signupText3}> Content </Text>

                    <Text style={styles.signupText2}>
                        You own the information, data, text, software, sound, photographs, graphics, video, messages, posts, tags, or other materials you make available in connection with the Services (“Content”), whether publicly posted, privately transmitted, or submitted through a third party API (e.g. a photograph submitted via Instagram). Public segments and routes created by using the Services are not considered Content. You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display any Content and any name, username or likeness that you post on or in connection with the Services in all media formats and channels now known or later developed without compensation to you. This license ends when you delete your Content or your account.
                        
                        You understand that you, and not RunTracker, are entirely responsible for all Content that you upload, post, email, transmit or otherwise make available via the Services. RunTracker does not proactively and routinely screen or monitor the Content posted to the Services by others and, as such, does not guarantee the accuracy, integrity or quality of such Content. RunTracker may, in its sole discretion, screen, monitor, refuse or remove any Content, or remove any Content that violates the Terms or is otherwise objectionable. You understand that by using the Services, you may be exposed to Content that is offensive, indecent or objectionable. Under no circumstances will RunTracker be liable in any way for any Content, including, but not limited to, any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of the use of any Content made available on the Services. You agree to bear all risks associated with the use of any Content available in connection with the Services, including any reliance on the accuracy, completeness, or usefulness of such Content.
                        
                        You agree that RunTracker is not responsible for, and does not endorse, Content posted on the Services. If your Content violates these Terms, you may bear legal responsibility for that Content. As between you and RunTracker, any Content will be non-confidential and non-proprietary and we will not be liable for any use or disclosure of Content. You acknowledge and agree that your relationship with RunTracker is not a confidential, fiduciary, or other type of special relationship, and that your decision to submit any Content does not place RunTracker in a position that is any different from the position held by members of the general public, including with regard to your Content. Your Content will not be subject to any obligation of confidence on the part of RunTracker other than as set forth in our Privacy Policy and your privacy controls, and RunTracker will not be liable for any use or disclosure of any Content you provide.
                        
                        The Services may provide you with the ability to mark certain Content that you submit to the Services as private, public, or available only to select users of the Services. RunTracker will maintain the privacy of such Content in accordance with your elections. However, if you do not elect to mark your Content as private or available for a limited group of members, or later change such designation to allow such Content to be made available to anyone, you are responsible for the public nature of the content. Please review our Privacy Policy for more information on how to manage your privacy controls.
                        
                        You give us permission to use your profile name, profile photo, and information about your activities and actions you have taken, including your use of third party products, services, or devices, in ads, offers and other commercial contexts on the RunTracker service without compensation to you. For example, we may show your RunTracker followers that you use a certain device, product, or service available from a brand that has paid us to display its ads on RunTracker. You may adjust settings to prevent your profile name and profile photo from appearing in an ad.
</Text>

                    <Text style={styles.signupText3}> Conduct </Text>

                    <Text style={styles.signupText2}>
                        We expect you to honor the RunTracker Community Standards. The Services are for your personal and noncommercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell for any commercial purposes any portion of the Services, use of the Services or access to Content. You may not use the Services, or assist or encourage any other party, to engage in any of the following Prohibited Activities:
                        
                        Copying, framing or mirroring any part of the Services;
                        Accessing the Services to monitor its availability, performance or functionality;
                        Permitting any third party to access the Services;
                        Using, copying, modifying, creating a derivative work of, reverse engineering, decompiling or otherwise attempting to extract the source code of the software underlying the Services or any part thereof, unless expressly permitted or required by law, and in any case, without providing prior written notice to RunTracker;
                        Publishing, transmitting, distributing or storing content, material, information or data that: (1) is illegal, obscene, defamatory, threatening, harassing, abusive, or hateful or that advocates violence; (2) is harmful to or interferes with the Services or any third party’s networks, equipment, applications, services or websites (e.g., viruses, worms, Trojan horses, etc.); (3) infringes, dilutes, misappropriates or otherwise violates any privacy, intellectual property, publicity or other personal rights including, without limitation, copyrights, patents, trademarks, trade secrets or other proprietary information (including unauthorized use of domain names); or (4) is fraudulent or contains false, deceptive or misleading statements, claims or representations (such as “phishing”);
                        Attempting to disrupt, degrade, impair or violate the integrity or security of the Services or the computers, services, Accounts or networks of any other party (including, without limitation, “hacking,” “denial of service” attacks, etc.), including any activity that typically precedes attempts to breach security such as scanning, probing or other testing or vulnerability assessment activity, or engaging in or permitting any network or hosting activity that results in the blacklisting or other blockage of RunTracker internet protocol space;
                        Avoiding payment of charges or fees payable by you with respect to the Services;
                        Committing any act that may be harmful to minors;
                        Distributing, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated “scraping”;
                        Using any automated system, including, without limitation, “robots,” “spiders,” “offline readers,” etc., to access the Services in a manner that sends more request messages to RunTracker than a human can reasonably produce in the same period of time by using a conventional web browser;
                        Taking any action that imposes, or may impose, at our sole discretion, an unreasonable or disproportionately large load on our infrastructure;
                        Collecting or harvesting any information relating to an identified or identifiable individual, including account names and information about users of the Services, from the Services;
                        Using the Services for any inappropriate commercial solicitation purposes;
                        Accessing any content on the Services through any technology or means other than those provided or authorized by the Services;
                        Submitting to the Services or to RunTracker any personally identifiable information, except as necessary for the establishment and operation of your account;
                        Submitting to the Services or to RunTracker any information that may be protected from disclosure by applicable law;
                        Bypassing the measures we may use to prevent or restrict access to the Services, including, without limitation, features that prevent or restrict use or copying of any content or enforce limitations on use of the Services or the content therein;
                        Violating any applicable law, statute, ordinance or regulation, or encouraging any conduct that could constitute a criminal offense or give rise to civil liability;
                        Removing any copyright, trademark or other proprietary rights notices contained in or on the Services; or
                        Executing any form of network monitoring or running a network analyzer or packet sniffer or other technology to intercept, decode, mine or display any packets used to communicate between the Service’s servers or any data not intended for you.
                        You are granted a limited, non-exclusive right to create a text hyperlink to the Services for non-commercial use only, provided such link does not portray RunTracker or any of its products or services in a false, misleading, derogatory or otherwise defamatory manner, and provided further that the linking site does not contain any pornographic, illegal, offensive, harassing or otherwise objectionable material. You are further granted a right to implement any RSS feeds located on the Services for your personal, non-commercial use, solely as described on the Services. We reserve the right to revoke these licenses generally, or your right to use specific links or RSS feeds, at any time, with or without cause.
                        
                        You understand that use of certain features of the Services may require you to purchase third party equipment or materials (e.g., GPS systems). While RunTracker may recommend the equipment or materials of certain third party suppliers, RunTracker shall have no responsibility for your acquisition or use of any third party equipment or materials and does not guarantee that third party equipment or materials will function with the Services or will be error-free.
                        
                        You understand that you are responsible for any charges associated with sending communications via your device. You hereby acknowledge that you have the right to communicate with your contacts via the Services.
                        
                        You represent and warrant that: (i) you are authorized to create your account, whether individually or on behalf of an organization; (ii) you own the Content posted by you on or through the Services or otherwise have the right to grant the rights and licenses set forth in these Terms; (iii) the posting and use of your Content on or through the Services does not and will not violate, misappropriate or infringe on the rights of any third party, including, without limitation, privacy and data protection rights, publicity rights, copyrights, trademark and/or other intellectual property rights; and (iv) you agree to pay for all royalties, fees, and any other monies owed by reason of Content you post on or through the Services.
                        
</Text>

                    <Text style={styles.signupText3}> Interactions with Members </Text>

                    <Text style={styles.signupText2}> The Services function as a venue to connect members in a virtual information place. As a neutral facilitator, RunTracker is not directly involved in the actual interactions between members of the Services. As a result, RunTracker has no control over the truth, accuracy, quality, legality, or safety of postings made by members of the Services. RunTracker shall have no responsibility to confirm the identity of members. RunTracker shall also have no responsibility to confirm or verify the qualifications, background, or abilities of members of the Services. You shall at all time exercise common sense and good judgment when dealing with any member of the Services.
                    
                    If you elect to use our features to inform your contacts about the Services, track your activities via RunTracker Beacon, or share your information with others, RunTracker may require you to provide contact information. RunTracker may contact that friend via a one-time email or text message. You represent that you are authorized to provide any third party contact information that you provide to RunTracker, that you are authorized to use such information to contact (including for RunTracker to contact on your behalf) the third party and that RunTracker may process it pursuant to the Privacy Policy.
</Text>
                    <Text style={styles.signupText3}> Third Parties </Text>
                    <Text style={styles.signupText2}>
                        Third party products and services made available on the Services are made and offered directly by the applicable third party. When you pursue or purchase any such product or service, you acknowledge that you are contracting directly with such third party and not with RunTracker. Your interaction with, or participation in promotions of, third parties found on or through the Services, including payment and delivery of goods or services, and any other terms, are solely between you and such third party. You are not obligated to use or transact business with any third party that appears on the Services. YOU AGREE THAT RunTracker SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGES OF ANY KIND INCURRED BY YOU AS THE RESULT OF ANY OF YOUR DEALINGS WITH THIRD PARTY SERVICE PROVIDERS OR ADVERTISERS AVAILABLE THROUGH THE SERVICES.
                        
                        RunTracker or third parties may provide links to other internet sites or resources through the Services. RunTracker does not endorse and is not responsible or liable for any content, information, advertising, products or other materials on or available from such sites or resources. You acknowledge and agree that RunTracker is not responsible for the availability of such external sites or resources.
</Text>
                    <Text style={styles.signupText3}> Electronic Communications </Text>
                    <Text style={styles.signupText2}>
                        The Services may provide you with the ability to send or post messages to forums or chat rooms, speak via internet voice connections or send similar messages and communications to third party service providers, advertisers, your personal contacts, other members and/or RunTracker. You agree to use communication methods available on the Services only to send communications and materials related to the subject matter for which RunTracker provided the communication method, and you further agree that all such communications by you shall be deemed your Content and shall be subject to and governed by the Terms and applicable law (including laws regulating direct marketing communications with which you will need to comply with, as applicable). By using communications methods available on the Services, you agree that (a) all communications methods constitute public, and not private, means of communication between you and the other party or parties, (b) communications sent to or received from third party service providers, advertisers or other third parties are not be endorsed, sponsored or approved by RunTracker (unless expressly stated otherwise by RunTracker) and (c) communications are not routinely pre-reviewed, post-reviewed, screened, archived or otherwise monitored by RunTracker in any manner, though RunTracker reserves the right to do so at any time at its sole discretion. You agree that all notices, disclosures and other communications that we provide to you electronically shall satisfy any legal requirement that such communications be in writing.
</Text>
                    <Text style={styles.signupText3}> Proprietary Rights </Text>
                    <Text style={styles.signupText2}>
                        You acknowledge and agree that the Services, any necessary software used in connection with the Services (if any), any aggregated data based on Content on the Services, and any Content available or made available on the Services contain proprietary and confidential information that is protected by applicable intellectual property and other laws. Except as expressly permitted by applicable law or authorized by RunTracker or applicable third party service providers or advertisers, you agree not to modify, rent, lease, loan, sell, distribute or create derivative works based on the Services, the software or Content available on the Services (other than Content that you may submit), in whole or in part.
                        
                        RunTracker grants you a personal, revocable, non-transferable, non-sublicensable and non-exclusive right and license to access and use the Services; provided that you do not (and do not allow any third party to) copy, modify, create a derivative work from, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, grant a security interest in or otherwise transfer any right in the Services, except where permitted by law. You agree not to access the Services by any means other than through the interfaces that are provided by RunTracker.
                        
                        The term RunTracker, the RunTracker logo and other RunTracker logos and product and service names are the exclusive trademarks of, and are owned by, RunTracker, Inc., and you may not use or display such trademarks in any manner without RunTracker’s prior written permission. Any third party trademarks or service marks displayed on the Services are the property of their respective owners.
                        
                        RunTracker reserves all rights not expressly granted hereunder.
</Text>
                    <Text style={styles.signupText3}> Claims of Infringement </Text>
                    <Text style={styles.signupText2}>
                        The Digital Millennium Copyright Act (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the internet infringes their rights under U.S. copyright law. RunTracker also reviews claims of trademark infringement. If you believe in good faith that materials hosted by RunTracker infringe your copyright or trademark rights, you (or your agent) may send us a notice requesting that the material be removed, or access to it blocked. The notice must include the following information: (a) a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (b) identification of the copyrighted work or trademark claimed to have been infringed (or, if multiple copyrighted works or trademarks located on the Services are covered by a single notification, a representative list of such works); (c) identification of the material that is claimed to be infringing or the subject of infringing activity, and information reasonably sufficient to allow RunTracker to locate the material on the Services; (d) the name, address, telephone number, and e-mail address (if available) of the complaining party; (e) a statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright or trademark owner, its agent, or the law; and (f) a statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. Please be advised that RunTracker will not respond to complaints that do not meet these requirements. If RunTracker determines that the materials alleged to infringe your copyright or trademark rights do not require removal, RunTracker will remove those materials only pursuant to a court order declaring the content or use of the materials unlawful.
                        
                        If you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send us a counter-notice. Counter-notices must include the following information: (a) your name, address, and telephone number; (b) the source of the content that was removed; (c) a statement under penalty of perjury that you have a good-faith belief that the content was removed in error; (d) a statement that you consent to the jurisdiction of Federal District Court for the judicial district in which your address is located; or, if your address is outside of the United States, for any judicial district in which RunTracker may be found, and that you will accept service of process from the person who provided the original complaint; and (e) a physical or electronic signature (for example, typing your full name).
                        
                        Notices and counter-notices with respect to the Services must meet the then-current statutory requirements imposed by the DMCA (see https://copyright.gov/title17/92appb.html) and should be sent to the agent identified below. We suggest that you consult your legal advisor before filing a notice or counter-notice. Also, be aware that there may be penalties for false claims under the DMCA.
</Text>

                    <Text style={styles.signupText3}> Disclaimer of Warranties and Liability </Text>
                    <Text style={styles.signupText2}>
                        THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND CONTENT AVAILABLE THROUGH THE SERVICES ARE PROVIDED TO YOU “AS IS” AND WITHOUT WARRANTY. RunTracker AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS HEREBY DISCLAIM ALL WARRANTIES WITH REGARD TO SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND CONTENT, INCLUDING, WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NONINFRINGEMENT. RunTracker AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS MAKE NO WARRANTY THAT: (a) THE SERVICE WILL MEET YOUR REQUIREMENTS; (b) YOUR CONTENT WILL BE AVAILABLE OR THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (c) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE; (d) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS; AND (e) ANY ERRORS IN THE SERVICES WILL BE CORRECTED.
                        
                        YOU EXPRESSLY AGREE THAT RunTracker IS NOT PROVIDING MEDICAL ADVICE VIA THE SERVICES. THE CONTENT PROVIDED THROUGH THE SERVICES, INCLUDING ALL TEXT, PHOTOGRAPHS, IMAGES, ILLUSTRATIONS, GRAPHICS, AUDIO, VIDEO AND AUDIO-VIDEO CLIPS, AND OTHER MATERIALS, WHETHER PROVIDED BY US OR BY OTHER ACCOUNT HOLDERS OR THIRD PARTIES IS NOT INTENDED TO BE AND SHOULD NOT BE USED IN PLACE OF (a) THE ADVICE OF YOUR PHYSICIAN OR OTHER MEDICAL PROFESSIONALS, (b) A VISIT, CALL OR CONSULTATION WITH YOUR PHYSICIAN OR OTHER MEDICAL PROFESSIONALS, OR (c) INFORMATION CONTAINED ON OR IN ANY PRODUCT PACKAGING OR LABEL. SHOULD YOU HAVE ANY HEALTH RELATED QUESTIONS, PLEASE CALL OR SEE YOUR PHYSICIAN OR OTHER HEALTHCARE PROVIDER PROMPTLY. SHOULD YOU HAVE AN EMERGENCY, CALL YOUR PHYSICIAN OR 911 IMMEDIATELY. YOU SHOULD NEVER DISREGARD MEDICAL ADVICE OR DELAY IN SEEKING MEDICAL ADVICE BECAUSE OF ANY CONTENT PRESENTED ON THE SERVICES, AND YOU SHOULD NOT USE THE SERVICES OR ANY CONTENT ON THE SERVICES FOR DIAGNOSING OR TREATING A HEALTH PROBLEM. THE TRANSMISSION AND RECEIPT OF OUR CONTENT, IN WHOLE OR IN PART, OR COMMUNICATION VIA THE INTERNET, E-MAIL OR OTHER MEANS DOES NOT CONSTITUTE OR CREATE A DOCTOR-PATIENT, THERAPIST-PATIENT OR OTHER HEALTHCARE PROFESSIONAL RELATIONSHIP BETWEEN YOU AND RunTracker.
                        
                        YOU EXPRESSLY AGREE THAT YOUR ATHLETIC ACTIVITIES (INCLUDING, BUT NOT LIMITED TO, CYCLING, RUNNING, OR FOLLOWING A RunTracker TRAINING PLAN OFFERED ON THE SERVICES) CARRY CERTAIN INHERENT AND SIGNIFICANT RISKS OF PROPERTY DAMAGE, BODILY INJURY OR DEATH AND THAT YOU VOLUNTARILY ASSUME ALL KNOWN AND UNKNOWN RISKS ASSOCIATED WITH THESE ACTIVITIES EVEN IF CAUSED IN WHOLE OR PART BY THE ACTION, INACTION OR NEGLIGENCE OF RunTracker OR BY THE ACTION, INACTION OR NEGLIGENCE OF OTHERS.
                        
                        YOU EXPRESSLY AGREE THAT RunTracker DOES NOT ASSUME RESPONSIBILITY FOR THE INSPECTION, SUPERVISION, PREPARATION, OR CONDUCT OF ANY RACE, CONTEST, CHALLENGE, OR GROUP ACTIVITY THAT UTILIZES THE SERVICES, INCLUDING ANY THAT ARE ORGANIZED BY A CLUB ADMINISTRATOR.
                        
                        YOU EXPRESSLY AGREE TO RELEASE RunTracker, ITS SUBSIDIARIES, AFFILIATES, OFFICERS, AGENTS, REPRESENTATIVES, EMPLOYEES, PARTNERS AND LICENSORS (THE “RELEASED PARTIES”) FROM ANY AND ALL LIABILITY IN CONNECTION WITH YOUR ATHLETIC ACTIVITIES AND/OR USE OF THE RunTracker WEBSITES, MOBILE APPLICATIONS, CONTENT, SERVICES OR PRODUCTS (INCLUDING, WITHOUT LIMITATION, ANY RunTracker TRAINING PLAN), AND PROMISE NOT TO SUE THE RELEASED PARTIES FOR ANY CLAIMS, ACTIONS, INJURIES, DAMAGES, OR LOSSES ASSOCIATED WITH SUCH USE. YOU ALSO AGREE THAT IN NO EVENT SHALL THE RELEASED PARTIES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH (a) YOUR USE OR MISUSE OF THE SERVICES, (b) YOUR USE OR MISUSE OF EQUIPMENT OR PROGRAMS CREATED OR LICENSED BY RunTracker (INCLUDING, WITHOUT LIMITATION, ANY RunTracker TRAINING PLAN) WHILE ENGAGED IN ATHLETIC ACTIVITIES, (c) YOUR DEALINGS WITH THIRD-PARTY SERVICE PROVIDERS OR ADVERTISERS AVAILABLE THROUGH THE SERVICES, (d) ANY DELAY OR INABILITY TO USE THE SERVICES EXPERIENCED BY YOU, OR (e) ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES OR CONTENT OBTAINED THROUGH THE SERVICES, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF RunTracker HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
                        
                        BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW SOME OR ALL OF THE EXCLUSIONS OR LIMITATIONS OF LIABILITY ABOVE, SUCH AS EXCLUSIONS FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SOME OF THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. IN ENTERING INTO THIS RELEASE, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE THE BENEFITS OF, SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, (AND ANY SIMILAR LAW OF ANY STATE, COUNTRY OR TERRITORY), WHICH PROVIDES AS FOLLOWS: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.”
                        
                        RunTracker DOES NOT ENDORSE YOUR CONTENT OR ANY OTHER MEMBER’S CONTENT AND SPECIFICALLY DISCLAIMS ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON OR ENTITY FOR ANY LOSS, DAMAGE (WHETHER ACTUAL, CONSEQUENTIAL, INDIRECT, PUNITIVE OR OTHERWISE), INJURY, CLAIM, LIABILITY OR OTHER CAUSE OF ANY KIND OR CHARACTER BASED UPON OR RESULTING FROM ANY CONTENT ON THE SERVICES.
                        
                        THE COMPANY’S MAXIMUM AGGREGATE LIABILITY TO YOU PURSUANT TO THESE TERMS SHALL NOT EXCEED THE GREATER OF EITHER (a) FIFTY DOLLARS ($50) OR (b) THE AMOUNT OF FEES PAID BY YOU TO RunTracker IN THE 12-MONTHS PRIOR TO DATE THE CLAIM.
                        
                        IF YOU ARE A CONSUMER RESIDING IN THE EUROPEAN UNION, YOU HAVE LEGAL REMEDIES IF WE CAUSE YOU LOSS BY OUR BREACH OR NON-PERFORMANCE OF OUR LEGAL OBLIGATIONS, OR BY OUR NEGLIGENCE, AND THESE TERMS DO NOT AFFECT THOSE STATUTORY REMEDIES.
                        
</Text>

                    <Text style={styles.signupText3}> Indemnity</Text>
                    <Text style={styles.signupText2}>
                        You agree to indemnify and hold RunTracker and its subsidiaries, affiliates, officers, agents, representatives, employees, partners and licensors harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of Content you submit, post, transmit or otherwise seek to make available through the Services, your use of the Services, your athletic activities which generate the Content you post or seek to post on the Services (including, but not limited to, athletic activities in connection with any contests, races, group rides, or other events which RunTracker sponsors, organizes, participates in, or whose Services are used in connection with), your connection to the Services, your violation of the Terms, your violation of any data protection or privacy laws, or your violation of any rights of another person or entity. Your rights with respect to RunTracker are not modified by the foregoing indemnification if the laws of your country of residence, applicable as a result of your use of our Services, do not permit it.
</Text>

                    <Text style={styles.signupText3}> Dispute Resolution</Text>

                    <Text style={styles.signupText3}> Arbitration</Text>
                    <Text style={styles.signupText2}>
                        The parties shall use their best efforts to settle any dispute, claim, question, or disagreement directly through good-faith negotiations, which shall be a precondition to either party initiating a lawsuit or arbitration. Except for disputes relating to the RunTracker’s intellectual property (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents) or if you opt out of this agreement to arbitrate, all claims arising out of or relating to this Agreement and your use of the Services shall be finally settled by binding arbitration administered by JAMS in accordance with its provisions and procedures for consumer-related disputes, excluding any rules or procedures governing or permitting class actions. The arbitrator, and not any court or agency, shall have exclusive authority to resolve all disputes arising out of or relating to this Agreement, including, but not limited to, any claim that all or any part of this Agreement is void or voidable. The arbitrator shall be empowered to grant whatever relief would be available in a court; provided, however, that the arbitrator will not have authority to award damages, remedies, or awards that conflict with this Agreement. The arbitrator’s award shall be binding on the parties and may be entered as a judgment in any court of competent jurisdiction. To the extent the filing fee for the arbitration exceeds the cost of filing a lawsuit, RunTracker will pay the additional cost. You and RunTracker hereby expressly waive trial by jury. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person’s account, if RunTracker is a party to the proceeding. This dispute resolution provision will be governed by the Federal Arbitration Act. This provision does not apply to users who live in the European Union.
                        
                        The parties understand that, absent this mandatory provision, they would have the right to sue in court and have a jury trial. They further understand that, in some instances, the costs of arbitration could exceed the costs of litigation and that the right to discovery may be more limited in arbitration than in court.
</Text>
                    <Text style={styles.signupText3}> Class-Action Waiver</Text>
                    <Text style={styles.signupText2}>
                        The parties further agree that any arbitration shall be conducted in their individual capacities only, and not as a class action or other representative action. If any court or arbitrator determines that the class-action waiver set forth in this section is void or unenforceable for any reason, or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes.
</Text>
                    <Text style={styles.signupText3}> Exception—Litigation of Small Claims Court Claims</Text>
                    <Text style={styles.signupText2}>
                        Notwithstanding the parties’ decision to resolve all disputes through arbitration, either party may also seek relief in a small claims court for disputes or claims within the scope of that court’s jurisdiction.
</Text>
                    <Text style={styles.signupText3}> Thirty-Day Right to Opt Out</Text>
                    <Text style={styles.signupText2}>
                        You have the right to opt out and not be bound by the arbitration- and class-action-waiver provisions set forth in this section by sending written notice of your decision to opt out to the following address: RunTracker, Inc., Attn: Legal Department, 208 Utah Street, San Francisco, CA 94103, USA. The notice must be sent within 30 days of registering to use the Services; otherwise, you shall be bound to arbitrate disputes in accordance with these Terms. If you opt out of these arbitration provisions, RunTracker also will not be bound by them. In addition, if you elect to opt out of these arbitration provisions, RunTracker may terminate your use of the Services.
</Text>
                    <Text style={styles.signupText3}> Time Limitation on Claims</Text>
                    <Text style={styles.signupText2}>
                        You agree that any claim you may have arising out of or related to your relationship with RunTracker and these Terms must be filed within one year after such claim arose; otherwise, your claim is permanently barred. This provision does not apply if you are based in the European Union in which case time limitations shall be determined in accordance with governing law for EU users mentioned below.
</Text>
                    <Text style={styles.signupText3}> Choice of Law and Forum</Text>
                    <Text style={styles.signupText2}>
                        Any action related to the Terms, Content, the Services, and your relationship with the RunTracker shall be governed by, and construed and interpreted in accordance with, the laws of the State of California without regard to its conflict of laws principles AND WILL SPECIFICALLY NOT BE GOVERNED BY THE UNITED NATIONS CONVENTIONS ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS, IF OTHERWISE APPLICABLE. Subject to the Section entitled “Dispute Resolution”, the parties irrevocably consent to bring any action to enforce this Agreement in the federal or state courts embracing San Francisco, California and you consent to the exclusive jurisdiction of the federal or state courts embracing San Francisco, California. If any party hereto brings any suit or action against another for relief, declaratory or otherwise, arising out of these Terms, the prevailing party will have and recover against the other party, in addition to all court costs and disbursements, such sum as the court may adjudge to be reasonable attorneys’ fees. Except to the extent prohibited by applicable law, the parties agree that any claim or cause of action arising out of or related to use of the Services or the Terms must be filed within one (1) year after such claim or cause of action arose or be forever barred. This paragraph does not apply to users who reside in the European Union.
                        
                        If you are a user based in the European Union, then Irish law shall apply to these Terms and the Irish courts shall have exclusive jurisdiction to hear disputes arising in relation to the Terms. Despite this, your local laws in your European Union Member State may allow you to take legal action against RunTracker in your Member State and to invoke certain local laws against RunTracker.
</Text>
                    <Text style={styles.signupText3}> Termination</Text>
                    <Text style={styles.signupText2}>
                        You agree that RunTracker may, under certain serious circumstances and without prior notice, immediately terminate your account and/or access to the Services. Cause for such termination shall include, but not be limited to, (a) breaches or violations of the Terms or other incorporated agreements, policies or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by you (self-initiated account deletions), (d) discontinuance or material modification to the Services (or any portion thereof), (e) unexpected technical or security issues or problems, (f) extended periods of inactivity, and/or (g) nonpayment of any fees owed by you in connection with the Services. Termination of your account may include (x) removal of access to all offerings within the Services, (y) deletion of your information, files and Content associated with your account, and (z) barring of further use of the Services. Further, you agree that all terminations for cause shall be made in RunTracker’s sole discretion and that RunTracker shall not be liable to you or any third party for any termination of your account or access to the Services. The following Sections shall survive termination of your account and/or the Terms: Member Content Submitted to the Services, Proprietary Rights, Your Feedback, Disclaimer of Warranties and Liability, Indemnity, Applicable Laws and General.
</Text>
                    <Text style={styles.signupText3}> General</Text>
                    <Text style={styles.signupText2}>
                        You agree that no joint venture, partnership, joint controllership, employment or agency relationship exists between you and RunTracker as a result of the Terms or your use of the Services. The Terms constitute the entire agreement between you and RunTracker with respect to your use of the Services. The failure of RunTracker to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect. You may not assign, delegate or otherwise transfer your account or your obligations under these Terms without the prior written consent of RunTracker. RunTracker has the right, in its sole discretion, to transfer or assign all or any part of its rights under these Terms and will have the right to delegate or use third party contractors to fulfill its duties and obligations under these Terms and in connection with the Services. RunTracker’s notice to you via email, regular mail or notices, posts, or links on the Services shall constitute acceptable notice to you under the Terms. A printed version of the Terms and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to the Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Section titles and headings in the Terms are for convenience only and have no legal or contractual effect. Any rights not expressly granted herein are reserved.
</Text>
                    <Text style={styles.signupText3}> Modification of the Terms and Services</Text>
                    <Text style={styles.signupText2}>
                        Certain provisions of the Terms may be supplemented or superseded by expressly designated legal notices or terms located on particular pages on the Services. RunTracker reserves the right to update the Terms at any time and for any reason in its sole discretion. RunTracker will notify you of any material changes to the Terms or to any service or other features of the Services. By continuing to access or use the Services after we have provided you with notice of a modification, you are agreeing to be bound by the modified Terms. If the modified Terms are not acceptable to you, your only recourse is to cease using the Services.
                        
                        RunTracker and its third party service providers may make improvements and/or changes in the Services, products, services, mobile applications, features, programs, and prices described at any time and for any reason in its sole discretion. The mobile application may download and install upgrades, updates and additional features in order to improve, enhance, and further develop the Services. RunTracker reserves the right at any time to modify or discontinue, temporarily or permanently, the Services or any portion thereof with or without notice. You agree that RunTracker shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Services.
</Text>
{this.renderButton2()}
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
    },
    container2: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupText2: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 250
    },
    signupText3: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 24,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 300,
        backgroundColor: '#4CA4B0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});
