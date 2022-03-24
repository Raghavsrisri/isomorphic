import React from "react";

function PrivacyPage(props, { page }) {
  page.title = "Privacy Policy";
  return (
    <div>
      <h1>{page.title}</h1>
      <p>Coming soon</p>
    </div>
  );
}
PrivacyPage.contextTypes = {
  page: PropTypes.shape({ title: PropTypes.string }).isRequired,
};
export default PrivacyPage;
