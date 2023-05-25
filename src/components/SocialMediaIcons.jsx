const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/josefin-berntsson-065158233/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/mweh-does-dev"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.behance.net/josefinberntss1"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="behance-link" src="../assets/behance.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/josefinemeli/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;