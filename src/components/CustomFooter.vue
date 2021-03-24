<template>
    <div class="position-relative bg-footer-bg px-4 pt-4 pb-5 container-fluid custom-footer">
        <div class="row text-white">
            <div class="col-12 col-sm-7 col-lg-5 col-xl-4 order-lg-2">
                <h3 class="font-weight-bold mb-0">Contact Us</h3>
                <div class="d-flex justify-content-start align-items-center mt-4 brand-wrapper">
                    <font-awesome-icon v-bind:icon="['fab', 'whatsapp']" class="h1 mr-4 mb-0"></font-awesome-icon>
                    <p class="h2 font-weight-bold mb-0">6406-5440 (登記搞手)</p>
                </div>
                <div class="d-flex justify-content-start align-items-center mt-4 brand-wrapper">
                    <font-awesome-icon v-bind:icon="['fab', 'whatsapp']" class="h1 mr-4 mb-0"></font-awesome-icon>
                    <p class="h2 font-weight-bold mb-0">6671-0697</p>
                </div>
            </div>
            <div class="col-12 col-sm-5 col-lg-3 order-lg-1 mt-5 mt-sm-0 mr-lg-5 mr-xl-0">
                <h3 class="font-weight-bold mb-0">Social Media</h3>
                <div v-for="brand in socialMedia" v-bind:key="brand.name"
                     class="d-flex justify-content-start align-items-center mt-4 brand-wrapper">
                    <font-awesome-icon v-bind:icon="brand.icon" class="h1 mr-4 mb-0"></font-awesome-icon>
                    <a v-bind:href="brand.url" class="h2 text-white font-weight-bold mb-1">{{brand.name}}</a>
                </div>
            </div>
            <div class="col-12 col-lg-3 col-xl-5 pl-xl-4 mt-5 mt-sm-0 mt-md-n4 mt-lg-0 order-last">
                <h3 class="font-weight-bold mb-0">Nakama App</h3>
                <div class="d-flex flex-column flex-sm-row flex-lg-column flex-xl-row justify-content-start align-items-start pt-4">
                    <div class="position-relative mb-3 download-button">
                        <a href="https://apps.apple.com/us/app/nakama%E6%B4%BB%E5%8B%95%E4%BA%A4%E5%8F%8B%E5%B9%B3%E5%8F%B0/id1501522323"
                           class="position-absolute w-100 h-100"></a>
                        <img v-bind:src="require('../assets/apple_download.png')" alt="Apple Download" class="h-100">
                    </div>
                    <div class="position-relative ml-sm-4 ml-lg-0 ml-xl-4 mb-3 download-button">
                        <a href="https://play.google.com/store/apps/details?id=club.nakama.app&hl=en&gl=US"
                           class="position-absolute w-100 h-100"></a>
                        <img v-bind:src="require('../assets/google_download.png')" alt="Android Download" class="h-100">
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute text-white pr-4 py-2 d-flex justify-content-end align-items-end foot-note">
            <h4 id="Disclaimer" v-on:click="activateModal('Disclaimer')">Disclaimer</h4>
            <h4 class="ml-5" v-on:click="activateModal('Privacy Policy')">Privacy Policy</h4>
        </div>
        <b-modal id="FooterModal" centered ok-only scrollable
                 v-model="showModal"
                 v-bind:return-focus="triggerElementId"
                 v-bind:size="modalSize">
            <h3 slot="modal-title">{{modalTitle}}</h3>
            <h6 class="position-relative w-100">{{modalContent}}</h6>
        </b-modal>
    </div>
</template>

<script>
import { BModal } from "bootstrap-vue"

export default {
    name: "CustomFooter",

    components: {
        BModal,
    },

    data() {
        return {
            socialMedia: [
                { icon:['fab', 'facebook-square'], name: "Facebook", url: "https://www.facebook.com/nakama.wtsgp/" },
                { icon:['fab', 'instagram-square'], name: "Instagram", url: "https://www.instagram.com/nakama.wtsgp/" },
                { icon:['fab', 'youtube'], name: "Youtube", url: "https://www.youtube.com/channel/UCLtDR4ZY_sAzFEcG2U2i5WA" },
            ],
            showModal: false,
            modalSize: "md",
            triggerElementId: "#Disclaimer",
            modalTitle: "",
            modalContent: "",
        }
    },

    methods: {
        activateModal(title) {
            this.modalTitle = title;
            if (title === "Disclaimer") {
                this.modalContent = "1. Nakama活動交友平台（以下簡稱「本平台」）擁有本網站及其所有附屬應用程式的一切版權。未經許可，嚴禁轉載。\n" +
                    "\n" +
                    "2. 本平台舉辦的活動均由已於本平台登記的「素人搞手」負責，本平台並不承擔任何與活動相關的風險及責任，亦不會為活動參加者購置任何形式的保險。如非特別注明，「素人搞手」亦不會為任何參加者提供保險承包，活動期間請參加者妥善管理自己的財物及保障自身安全。\n" +
                    "\n" +
                    "3. 本平台為線上活動交流平台，並不會以任何形式管制、管理、監察或限制一切於線下發生的活動或事宜。「素人搞手」的活動安排屬於單純自發性質，本平台對此或由此衍生的任何事件或意外概不負責。\n" +
                    "\n" +
                    "4. 本平台上登記的「素人搞手」及管理於本平台發佈的任何群組的群組Admin均為本平台的合作夥伴，並不在任何場合上代表本平台，亦非本平台的代理、僱員、代表或發言人。本平台為他們開設群組只為方便他們透過本平台宣傳自己的群組及活動，本平台對他們的群組及他們本人的行為及其行為衍生的事件或意外概不負責。\n" +
                    "\n" +
                    "5. 本平台對任何人或機構於本平台發表的資訊並不負任何責任，唯本平台不鼓勵以銷售為主要目的的交友行為，對可疑的詐騙行為亦會採取跟進，會員可主動向本平台管理員投訴。如接獲任何投訴或舉報，本平台或會註銷該帳號的會員資格甚至送官究治。\n" +
                    "\n" +
                    "6. 本網頁所載的所有資料只供參考之用，在個別情況下，這些資料可能與最新情況有所不同。本平台將會隨時更改資料，並由本平台決定而不作另行通知。雖然本平台已盡力確保本網頁的資料準確性，但本平台不會明示或隱含保證該等資料均為準確無誤。如因使用本網站所提供的資料而引致任何損失，本平台概不負責。\n" +
                    "\n" +
                    "7. 為了方便瀏覽者，本網站建立了一些指向其他網站的連結。本平台對這些網站的內容概不負責。\n" +
                    "\n" +
                    "8. 在給予或不給予事先通知下，本平台保留隨時更新本免責聲明的權利，任何更改於本網站發佈時，立即生效。請閣下在每次瀏覽本網站時，務必查看此免責聲明。如閣下繼續使用本平台，即代表閣下同意接受更改後的免責聲明約束。\n" +
                    "\n" +
                    "9. 本免責聲明受香港特別行政區法律約束及按照香港特別行政區法律進行詮釋。"
            } else {
                this.modalContent = "INTRODUCTION\n" +
                    "\n" +
                    "Nakama (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.nakama-group.com and our mobile application, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.\n" +
                    "\n" +
                    "We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.\n" +
                    "\n" +
                    "You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.\n" +
                    "\n" +
                    "COLLECTION OF YOUR INFORMATION\n" +
                    "\n" +
                    "We may collect information about you in a variety of ways. The information we may collect on the Site includes:\n" +
                    "\n" +
                    "Personal Data\n" +
                    "\n" +
                    "Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or our mobile application, or when you choose to participate in various activities related to the Site and our mobile application, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site and our mobile application.\n" +
                    "\n" +
                    "Derivative Data\n" +
                    "\n" +
                    "Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.\n" +
                    "\n" +
                    "Financial Data\n" +
                    "\n" +
                    "Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site or our mobile application. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, , and you are encouraged to review their privacy policy and contact them directly for responses to your questions.\n" +
                    "\n" +
                    "Facebook Permissions\n" +
                    "\n" +
                    "The Site and our mobile application may by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference page.\n" +
                    "\n" +
                    "Data From Social Networks\n" +
                    "\n" +
                    "User information from social networking sites, such as Apple’s Game Center, Facebook, Google+, Instagram, Pinterest, Twitter, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. If you are using our mobile application, this information may also include the contact information of anyone you invite to use and/or join our mobile application.\n" +
                    "\n" +
                    "Mobile Device Data\n" +
                    "\n" +
                    "Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.\n" +
                    "\n" +
                    "Third-Party Data\n" +
                    "\n" +
                    "Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.\n" +
                    "\n" +
                    "Data From Contests, Giveaways, and Surveys\n" +
                    "\n" +
                    "Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.\n" +
                    "\n" +
                    "Mobile Application Information\n" +
                    "\n" +
                    "If you connect using our mobile application:\n" +
                    "\n" +
                    "Geo-Location Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our mobile application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.\n" +
                    "Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device’s bluetooth, calendar, camera, contacts, microphone, reminders, sensors, SMS messages, social media accounts, storage, and other features. If you wish to change our access or permissions, you may do so in your device’s settings.\n" +
                    "Mobile Device Data. We may collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.\n" +
                    "Push Notifications. We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.\n" +
                    "USE OF YOUR INFORMATION\n" +
                    "\n" +
                    "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our mobile application to:\n" +
                    "\n" +
                    "Administer sweepstakes, promotions, and contests.\n" +
                    "Assist law enforcement and respond to subpoena.\n" +
                    "Compile anonymous statistical data and analysis for use internally or with third parties.\n" +
                    "Create and manage your account.\n" +
                    "Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site and our mobile application to you.\n" +
                    "Email you regarding your account or order.\n" +
                    "Enable user-to-user communications.\n" +
                    "Fulfill and manage purchases, orders, payments, and other transactions related to the Site and our mobile application.\n" +
                    "Generate a personal profile about you to make future visits to the Site and our mobile application more personalized.\n" +
                    "Increase the efficiency and operation of the Site and our mobile application.\n" +
                    "Monitor and analyze usage and trends to improve your experience with the Site and our mobile application.\n" +
                    "Notify you of updates to the Site and our mobile applications.\n" +
                    "Offer new products, services, mobile applications, and/or recommendations to you.\n" +
                    "Perform other business activities as needed.\n" +
                    "Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.\n" +
                    "Process payments and refunds.\n" +
                    "Request feedback and contact you about your use of the Site and our mobile application.\n" +
                    "Resolve disputes and troubleshoot problems.\n" +
                    "Respond to product and customer service requests.\n" +
                    "Send you a newsletter.\n" +
                    "Solicit support for the Site and our mobile application.\n" +
                    "Other\n" +
                    "DISCLOSURE OF YOUR INFORMATION\n" +
                    "\n" +
                    "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:\n" +
                    "\n" +
                    "By Law or to Protect Rights\n" +
                    "\n" +
                    "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.\n" +
                    "\n" +
                    "Third-Party Service Providers\n" +
                    "\n" +
                    "We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.\n" +
                    "\n" +
                    "Marketing Communications\n" +
                    "\n" +
                    "With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.\n" +
                    "\n" +
                    "Interactions with Other Users\n" +
                    "\n" +
                    "If you interact with other users of the Site and our mobile application, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.\n" +
                    "\n" +
                    "Online Postings\n" +
                    "\n" +
                    "When you post comments, contributions or other content to the Site or our mobile applications, your posts may be viewed by all users and may be publicly distributed outside the Site and our mobile application in perpetuity.\n" +
                    "\n" +
                    "Third-Party Advertisers\n" +
                    "\n" +
                    "We may use third-party advertising companies to serve ads when you visit the Site or our mobile application. These companies may use information about your visits to the Site and our mobile application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.\n" +
                    "\n" +
                    "Affiliates\n" +
                    "\n" +
                    "We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.\n" +
                    "\n" +
                    "Business Partners\n" +
                    "\n" +
                    "We may share your information with our business partners to offer you certain products, services or promotions.\n" +
                    "\n" +
                    "Offer Wall \n" +
                    "\n" +
                    "Our mobile application may display a third-party hosted “offer wall.” Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for acceptance and completion of an advertisement offer. Such an offer wall may appear in our mobile application and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will leave our mobile application. A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account.\n" +
                    "\n" +
                    "Social Media Contacts \n" +
                    "\n" +
                    "If you connect to the Site or our mobile application through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.\n" +
                    "\n" +
                    "Other Third Parties\n" +
                    "\n" +
                    "We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.\n" +
                    "\n" +
                    "Sale or Bankruptcy\n" +
                    "\n" +
                    "If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.\n" +
                    "\n" +
                    "We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.\n" +
                    "\n" +
                    "TRACKING TECHNOLOGIES\n" +
                    "\n" +
                    "Cookies and Web Beacons\n" +
                    "\n" +
                    "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site and our mobile application to help customize the Site and our mobile application and improve your experience. When you access the Site or our mobile application, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site or our mobile application. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.\n" +
                    "\n" +
                    "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site and our mobile application to help customize the Site and our mobile application] and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy posted on the Site, which is incorporated into this Privacy Policy. By using the Site, you agree to be bound by our Cookie Policy.\n" +
                    "\n" +
                    "Internet-Based Advertising\n" +
                    "\n" +
                    "Additionally, we may use third-party software to serve ads on the Site and our mobile application, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.\n" +
                    "\n" +
                    "Website Analytics\n" +
                    "\n" +
                    "We may also partner with selected third-party vendors to allow tracking technologies and remarketing services on the Site and our mobile application through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site and our mobile application, determine the popularity of certain content and better understand online activity. By accessing the Site ,our mobile application, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.\n" +
                    "\n" +
                    "You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.\n" +
                    "\n" +
                    "THIRD-PARTY WEBSITES\n" +
                    "\n" +
                    "The Site and our mobile application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site or our mobile application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site or our mobile application.\n" +
                    "\n" +
                    "SECURITY OF YOUR INFORMATION\n" +
                    "\n" +
                    "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.\n" +
                    "\n" +
                    "POLICY FOR CHILDREN\n" +
                    "\n" +
                    "We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.\n" +
                    "\n" +
                    "CONTROLS FOR DO-NOT-TRACK FEATURES\n" +
                    "\n" +
                    "Most web browsers and some mobile operating systems and our mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy. Most web browsers and some mobile operating systems and our mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. If you set the DNT signal on your browser, we will respond to such DNT browser signals.\n" +
                    "\n" +
                    "OPTIONS REGARDING YOUR INFORMATION\n" +
                    "\n" +
                    "Account Information\n" +
                    "\n" +
                    "You may at any time review or change the information in your account or terminate your account by:\n" +
                    "\n" +
                    "Logging into your account settings and updating your account\n" +
                    "Contacting us using the contact information provided below\n" +
                    "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.\n" +
                    "\n" +
                    "Emails and Communications\n" +
                    "\n" +
                    "If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:\n" +
                    "\n" +
                    "Noting your preferences at the time you register your account with the Site or our mobile application.\n" +
                    "Logging into your account settings and updating your preferences.\n" +
                    "Contacting us using the contact information provided below.\n" +
                    "If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.\n" +
                    "\n" +
                    "CALIFORNIA PRIVACY RIGHTS\n" +
                    "\n" +
                    "California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.\n" +
                    "\n" +
                    "If you are under 18 years of age, reside in California, and have a registered account with the Site or our mobile application, you have the right to request removal of unwanted data that you publicly post on the Site or our mobile application. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site or our mobile application, but please be aware that the data may not be completely or comprehensively removed from our systems."
            }
            const innerWidth = window.innerWidth;
            if (innerWidth > 992) {
                this.modalSize = "xl";
            } else if (innerWidth > 768) {
                this.modalSize = "lg";
            } else if (innerWidth > 576) {
                this.modalSize = "md";
            } else {
                this.modalSize = "sm";
            }
            this.showModal = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "src/styles/sections";

@include media-breakpoint-down(sm) {
	.h1 {
		font-size: 2.25rem;
    }

    .h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.5rem;
    }
}

.download-button {
	height: 70px;

	@include media-breakpoint-down(xs) {
		height: 60px;
	}
}

.foot-note {
    bottom: 0;
    right: 0;

    h4 {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        @include media-breakpoint-down(sm) {
            font-size: 1.25rem;
        }
    }
}

#FooterModal {
    h6 {
        white-space: pre-wrap;
    }
}
</style>