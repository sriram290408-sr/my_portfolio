function openLink(platform) {
  const links = {
    github: "https://github.com/sriram290408-sr.com",
    linkedin: "https://www.linkedin.com/in/sri-ram-679920350/",
    hackerrank: "https://www.hackerrank.com/profile/sriram290408",
  };
  window.open(links[platform], "_blank");
}

function openProject(project) {
  const projects = {
    sp: "https://sp05.netlify.app/",
    viberise: "https://vibriseup.netlify.app/",
    artc: "https://artc1.netlify.app/",
    eduverse: "https://YOUR_PROJECT_LINK_4",
  };

  window.open(projects[project], "_blank");
}

// EMAIL FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_th5u8m7", "template_lf0rat6", this).then(
    function () {
      alert("Message sent successfully ✅");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("Failed to send message ❌");
      console.log(error);
    }
  );
});
