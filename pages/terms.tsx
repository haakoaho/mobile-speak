import React from "react";
import styles from "../styles/terms.module.scss";

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to the Oslo Toastmasters Club! By registering as a member, you
        agree to the following terms and conditions:
      </p>

      <h2>Data Sharing</h2>
      <p>
        As a member of the Oslo Toastmasters Club, you agree to share your
        personal information with other club members. This information includes:
      </p>
      <ul>
        <li><strong>Name:</strong> Your full name as provided during registration.</li>
        <li><strong>Email:</strong> Your email address for communication and coordination purposes.</li>
        <li><strong>Phone Number:</strong> Your phone number for facilitating discussions with speakers and evaluators.</li>
      </ul>

      <h2>Membership</h2>
      <p>
        By registering, you confirm that you are a part of the Oslo Toastmasters
        Club. This membership allows you to participate in club activities and
        access shared resources.
      </p>

      <h2>Use of Data</h2>
      <p>
        Your data will be used for the following purposes:
      </p>
      <ul>
        <li><strong>Club Communications:</strong> Your name and email will be used to send you updates, meeting schedules, and other relevant information.</li>
        <li><strong>Speaker-Evaluator Coordination:</strong> Your phone number will be used to facilitate discussions between speakers and evaluators.</li>
        <li><strong>WhatsApp Group:</strong> The board will use your phone number to add you to the club's WhatsApp group for members.</li>
      </ul>

      <h2>Marketing Consent</h2>
      <p>
        During registration, you will have the option to consent to the use of
        pictures of your speeches on social media. This consent is optional and
        not required to use the service. However, it will greatly assist us in
        promoting the club and its activities.
      </p>

      <h2>GDPR Compliance</h2>
      <p>
        In accordance with GDPR regulations, your explicit consent is required
        for the use of your personal data. You will be asked to provide this
        consent during registration. You can update your consent preferences at
        any time by contacting the club's board.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about these terms and conditions,
        please contact us at <a href="mailto:hakon.hoff@outlook.com">hakon.hoff@outlook.com</a>.
      </p>
    </div>
  );
};

export default Terms;
