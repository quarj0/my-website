const tutorials = [
    {
        title: "Python Tutorial for Beginners",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-tutorial-for-beginners",
    },
    {
        title: "Python Tutorial for Intermediate",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-tutorial-for-intermediate",
    },
    {
        title: "Python Tutorial for Advanced",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-tutorial-for-advanced",
    },
    {
        title: "Python Tutorial for Experts",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-tutorial-for-experts",
    },
    {
        title: "Python Data Science Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-data-science-tutorial",
    },
    {
        title: "Python Web Development Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-web-development-tutorial",
    },
    {
        title: "Python Machine Learning Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-machine-learning-tutorial",
    },
    {
        title: "Python Network Programming Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-network-programming-tutorial",
    },
    {
        title: "Python GUI Programming Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-gui-programming-tutorial",
    },
    {
        title: "Python Game Development Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-game-development-tutorial",
    },
    {
        title: "Python Web Scraping Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-web-scraping-tutorial",
    },
    {
        title: "Python Regular Expressions Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-regular-expressions-tutorial",
    },
    {
        title: "Python Image Processing Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-image-processing-tutorial",
    },
    {
        title: "Python Web Frameworks Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-web-frameworks-tutorial",
    },
    {
        title: "Python Database Programming Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-database-programming-tutorial",
    },
    {
        title: "Python Data Visualization Tutorial",
        description: "Learn Python in 1 hour",
        image: "https://via.placeholder.com/350x200",
        link: "/python-data-visualization-tutorial",
    },
    {
        title: "JavaScript Tutorial for Beginners",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-tutorial-for-beginners",
    },
    {
        title: "JavaScript Tutorial for Intermediate",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-tutorial-for-intermediate",
    },
    {
        title: "JavaScript Tutorial for Advanced",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-tutorial-for-advanced",
    },
    {
        title: "JavaScript Object Oriented Programming Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-tutorial-for-experts",
    },
    {
        title: "JavaScript Data Science Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-data-science-tutorial",
    },
    {
        title: "JavaScript Web Development Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-web-development-tutorial",
    },
    {
        title: "JavaScript Network Programming Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-network-programming-tutorial",
    },
    {
        title: "JavaScript GUI Programming Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-gui-programming-tutorial",
    },
    {
        title: "JavaScript Game Development Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-game-development-tutorial",
    },
    {
        title: "JavaScript Web Scraping Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-web-scraping-tutorial",
    },
    {
        title: "JavaScript Regular Expressions Tutorial",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-regular-expressions-tutorial",
    },
    {
        title: "SQL Tutorial for Beginners",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-tutorial-for-beginners",
    },
    {
        title: "SQL Tutorial for Intermediate",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-tutorial-for-intermediate",
    },
    {
        title: "SQL Tutorial for Advanced",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-tutorial-for-advanced",
    },
    {
        title: "SQL Tutorial for Experts",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-tutorial-for-experts",
    },
    {
        title: "Kali Linux Tutorial for Beginners",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-tutorial-for-beginners",
    },
    {
        title: "Kali Linux Tutorial for Intermediate",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-tutorial-for-intermediate",
    },
    {
        title: "Kali Linux Tutorial for Advanced",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-tutorial-for-advanced",
    },
    {
        title: "Cryptography Tutorial for Beginners",

        description: "Learn Cryptography in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-tutorial-for-experts",
    },
    {
        title: "Kali Linux Web Penetration Testing Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-web-penetration-testing-tutorial",
    },
    {
        title: "Kali Linux Network Penetration Testing Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-network-penetration-testing-tutorial",
    },
    {
        title: "Kali Linux Wireless Penetration Testing Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-wireless-penetration-testing-tutorial",
    },
    {
        title: "Kali Linux Password Cracking Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-password-cracking-tutorial",
    },
    {
        title: "Kali Linux Forensics Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-forensics-tutorial",
    },
    {
        title: "Kali Linux Exploitation Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-exploitation-tutorial",
    },
    {
        title: "Kali Linux Reverse Engineering Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-reverse-engineering-tutorial",
    },
    {
        title: "Kali Linux Post Exploitation Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-post-exploitation-tutorial",

    },
    {
        title: "Kali Linux Mobile Penetration Testing Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-mobile-penetration-testing-tutorial",
    },
    {
        title: "Kali Linux IoT Penetration Testing Tutorial",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-iot-penetration-testing-tutorial",
    },
    {
        title: "How to Install Kali Linux",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux",
    },
    {
        title: "How to Install Kali Linux on VirtualBox",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-virtualbox",
    },
    {
        title: "How to Install Kali Linux on VMware",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-vmware",
    },
    {
        title: "How to Install Kali Linux on Windows 10",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-windows-10",
    },
    {
        title: "How to Install Kali Linux on Raspberry Pi",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-raspberry-pi",
    },
    {
        title: "How to Install Kali Linux on Android",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-android",
    },
    {
        title: "How to Install Kali Linux on Chromebook",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-chromebook",
    },
    {
        title: "How to Install Kali Linux on Mac",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-mac",
    },
    {
        title: "How to Install Kali Linux on USB",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-usb",
    },
    {
        title: "How to Install Kali Linux on Dual Boot",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/how-to-install-kali-linux-on-dual-boot",
    },
    {
        title: "HTML Tutorial",
        description: "Learn HTML in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-tutorial",
    },
    {
        title: "CSS Tutorial",
        description: "Learn CSS in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-tutorial",
    },
    {
        title: "React Tutorial",
        description: "Learn React in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-tutorial",
    },
    {
        title: "JavaScript Exercises",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-exercises",
    },
    {
        title: "Python Exercises",
        description: "Learn Python in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-exercises",
    },
    {
        title: "SQL Exercises",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-exercises",
    },
    {
        title: "React Exercises",
        description: "Learn React in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-exercises",
    },
    {
        title: "HTML Exercises",
        description: "Learn HTML in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-exercises",
    },
    {
        title: "CSS Exercises",
        description: "Learn CSS in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-exercises",
    },
    {
        title: "Kali Linux Exercises",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-exercises",
    },

    {
        title: "Python References",
        description: "Learn Python in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-references",
    },
    {
        title: "SQL References",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-references",
    },
    {
        title: "React References",
        description: "Learn React in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-references",
    },
    {
        title: "HTML References",
        description: "Learn HTML in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-references",
    },
    {
        title: "CSS References",
        description: "Learn CSS in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-references",
    },
    {
        title: "Kali Linux References",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-references",
    },
    {
        title: "JavaScript References",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-references",
    },
    {
        title: "Python Cheat Sheet",
        description: "Learn Python in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-cheat-sheet",
    },
    {
        title: "SQL Cheat Sheet",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-cheat-sheet",
    },
    {
        title: "React Cheat Sheet",
        description: "Learn React in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-cheat-sheet",
    },
    {
        title: "HTML Cheat Sheet",
        description: "Learn HTML in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-cheat-sheet",
    },
    {
        title: "CSS Cheat Sheet",
        description: "Learn CSS in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-cheat-sheet",
    },
    {
        title: "Kali Linux Cheat Sheet",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-cheat-sheet",
    },
    {
        title: "JavaScript Cheat Sheet",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-cheat-sheet",
    },
    {
        title: "Python Quiz",
        description: "Learn Python in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-quiz",
    },
    {
        title: "SQL Quiz",
        description: "Learn SQL in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-quiz",
    },
    {
        title: "React Quiz",
        description: "Learn React in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-quiz",
    },
    {
        title: "HTML Quiz",
        description: "Learn HTML in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-quiz",
    },
    {
        title: "CSS Quiz",
        description: "Learn CSS in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-quiz",
    },
    {
        title: "Kali Linux Quiz",
        description: "Learn Kali Linux in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-quiz",
    },
    {
        title: "JavaScript Quiz",
        description: "Learn JavaScript in 1 hour",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-quiz",
    }
];

export default tutorials;