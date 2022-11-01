function showText(component) {
  const text = document.getElementById("expanded-text");
  switch (component){
    case "french":
      text.innerHTML = "<h2>French</h2><p>I started studying french at university and I've not stopped studying since.<br> I studied at the <a href='https://agora-eoi.xtec.cat/eoigirona/0'>EOI Girona</a>.</p>";
      break;
    case "english":
      text.innerHTML = "<h2>English</h2><p>I started studying English at school when I was three years old and I've reached the level C1.</p>";
      break;
    case "spanish":
    case "catalan":
      text.innerHTML = "<h2>Native Languages</h2><p>As i grew in the Spanish city of Girona I've spoken Catalan and Spanish alternatively with friends and family since i was a kid.</p>";
      break;
    case "doceo":
      text.innerHTML = "<h2>Doceo Software 2019-Present</h2><p>Projects I have been involved in:<ul><li>Biometric Signature: FrontEnd (Angular, JavaScript), BackEnd (PHP)</li><li>Facial Recognition (C#)</li><li>Image Enhancement (Visual Basic)</li></ul></p>";
      break;
    case "other":
      text.innerHTML = "<h2>Personal projects</h2><p>Here is a list of the most important projects I've been involved in: <ul><li>GDSC University of Girona.</li><li>Hackatons such as the AI Colisseum 2022.</li></ul></p>";
      break;
    case "computer-engineering":
      text.innerHTML = "<h2>Computer Engineering</h2><p>I have studied in the <a href='https://www.udg.edu/ca/'> UDG (University of Girona)</a> a computer engineering degree between the years 2020 and 2024.</p>";
      break;
    case "university-access":
      text.innerHTML = "<h2>PAU 2020</h2><p>Recognised by the Government of Catalonia for having outstanding results in the <a href='https://universitats.gencat.cat/ca/proves-acces-PAU-PAP/sobre-PAU/que-son-PAU/'> university access tests.</a></p>";
      break;
    case "whoami":
      text.innerHTML = "<h2>Welcome to my curriculum!</h2><p>If you need more information on any of the topics in the bottom left side of the curriculum, just click on them!</p><p>I'm Bernat Comas, i'm a perfectionist person who loves music, movies and sports and is really passionate about what i do.</p><p>I have a passion for studiying new subjects and I'm all for learning new things.</p>";
      break;
  }
}
