  //FORMVALIDERING STARTER
  function formValidate(form) {
      // Konstanten messageWrapper (div)  
      const Text = document.getElementById('Text');
      let status = true;

      // FUNKTION TIL FULL-NAME STARTER

      // Hvis feltet fullname ikke (!) er true
      if (!form.fullname.value) {
          Text.innerText = 'Du skal udfylde feltet navn';
          // status er tilføjet for kun at få fejlmedelsen 
          status = false;
          // return false er tilføjet for ikke at få alle bedsker på 1 gang (her stopper vi funktionen)
          return false;

          //tjekker værdien og sirker den passer på teskttypen.
      } else if (!isValidAlpha(form.fullname.value)) {
          // Hvis ikke fulname er tom, skrives alert
          Text.innerText = 'Du har ikke indtastet et gyldigt navn.';
          status = false;
          return false;
      }


      // FUNKTION FOR LASTNAME STARTER - se kommentar ved "fullname" de passer også her til
      if (!form.lastname.value) {
          Text.innerText = 'Du skal udfylde feltet Efternavn';
          status = false;
          return false;
      } else if (!isValidAlpha(form.lastname.value)) {
          Text.innerText = 'Du har ikke indtastet en gyldig efternavn!';
          status = false;
          return false;
      }

      // FUNKTION FOR ADRESS STARTER - se kommentar ved "fullname" de passer også her til
      if (!form.adress.value) {
          Text.innerText = 'Du skal udfylde feltet adress';
          status = false;
          return false;
      }
      // ingen if else da adresse både er tal og bokstaver 

      // FUNKTION FOR POSTNUMMER STARTER - se kommentar ved "fullname" de passer også her til
      if (!form.postnummer.value) {
          Text.innerText = 'Du skal udfylde feltet postnummer';
          status = false;
          return false;
      } else if (!isValidNumber(form.postnummer.value)) {
          Text.innerText = 'Du har ikke indtastet et gyldig postnummer!';
          status = false;
          return false;
      }

      // FUNKTION FOR MOBILNUMMER STARTER - se kommentar ved "fullname" de passer også her til

      if (!form.phone.value) {
          Text.innerText = 'Du skal udfylde feltet telefonnummer';
          status = false;
          return false;
      } else if (!isValidNumber(form.phone.value)) {
          Text.innerText = 'Du har ikke indtastet et gyldig telefonnummer!';
          status = false;
          return false;
      }

      // FUNKTION FOR EMAIL STARTER - se kommentar ved "fullname" de passer også her til

      if (!form.email.value) {
          Text.innerText = 'Du skal udfylde feltet email';
          status = false;
          return false;
      } else if (!isValidEmail(form.email.value)) {
          Text.innerText = 'Du har ikke indtastet en gyldig email!';
          status = false;
          return false;
      }


      //CHECKBOX 

      function formValidate(form) {
          ErrorText = "";
          if ((form.radiobtn[0].checked == false) && (form.radiobtn[1].checked == false) && (form.radiobtn[2].checked == false)) {
              alert("Vælg venlist din Organisation");
              return false;
          }
          if (ErrorText = "") { form.submit() }
      }

      // Hvis status er true skal vores div skrive dette
      if (status) {
          Text.innerText = "Formularen kan sendes";
      }
  }


  // Herunder kommer den kode der måler mønstre. fx @, tal mm (SIDE FUNKTIONER)
  //Tjekker om værdi er et nummer
  function isValidNumber(value) {
      let pattern = /^[0-9]+$/;
      return pattern.test(value);
  }

  //Tjekker om værdi er alfabet
  function isValidAlpha(value) {
      let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
      return pattern.test(value);
  }

  //Tjekker om værdi har en gyldig email syntaks
  function isValidEmail(value) {
      let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return pattern.test(value);
  }

  //Tjekker at værdi har en gyldig længde
  function isValidLength(value, min, max) {
      let pattern = RegExp('^[0-9A-Za-z@#$%]{' + min + ',' + max + '}$');
      return pattern.test(value);
  }