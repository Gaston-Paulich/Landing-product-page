function submit(e) {
  (structure = {}),
    (structure.domain = window.location.hostname),
    (structure.url = window.location.href),
    (structure.ip = window.location.host);
  var t = document.cookie
    .split(";")
    .map((e) => e.trim())
    .find((e) => e.startsWith("_td="));
  (t = t
    ? (t = document.cookie
        .split(";")
        .map((e) => e.trim())
        .find((e) => e.startsWith("_td="))
        .split("="))[1]
    : null),
    (structure.cookie = t),
    service(e, structure);
}
async function service(e, t) {
  var o = new Headers();
  o.append("Content-Type", "application/json"),
    o.append(
      "Cookie",
      "ARRAffinity=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5; ARRAffinitySameSite=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5"
    );
  var n = JSON.stringify({
    FirstName: e.nombre,
    LastName: e.apellido,
    DateOfBirth: e.anio + "/" + e.mes + "/" + e.dia,
    Gender: e.genero,
    Email: e.email,
    Phone: e.telefono,
    City: null,
    ClaimedPreference: e.moments,
    Interests:
      "{'Product Classification':{'AlcoholicBeverage':{'Tipo':['Beer']}}}",
    Purposes: [],
    Brand: "BMIX",
    Campaign: "SAZ_CHL_BMIX_GENERIC_DIC_2023_WEBFORM",
    Country: "chl",
    Zone: "saz",
    Form: "SAZ_CHL_BMIX_GENERIC_DIC_2023_WEBFORM",
    Unify: !0,
    Production: !0,
    IP: t.domain,
    URL: t.url,
    Host: t.ip,
    ClientId: t.cookie,
  });
  fetch("https://customapiconnector.azurewebsites.net/ABInBev", {
    method: "POST",
    headers: o,
    body: n,
    redirect: "follow",
  })
    .then((e) => e.text())
    .then((e) => console.log(e))
    .catch((e) => console.log("error", e));
}
document.addEventListener("DOMContentLoaded", function () {
  function e(e, t) {
    document.getElementById(e).innerHTML = t;
  }
  document.getElementById("btn-menu").addEventListener("click", (e) => {
    document.querySelector("body").classList.toggle("show-menu"),
      document.getElementById("btn-menu").classList.toggle("close"),
      document.querySelector(".nav-mobile").classList.toggle("open");
  }),
    document.querySelectorAll(".menu-scroll li a").forEach((e, t) => {
      e.addEventListener("click", (t) => {
        const o = e.getAttribute("href");
        t.preventDefault(),
          document.querySelector("body").classList.remove("show-menu"),
          document.getElementById("btn-menu").classList.remove("close"),
          document.querySelector(".nav-mobile").classList.remove("open"),
          gsap.to(window, { duration: 1, scrollTo: { y: o, offsetY: 0 } });
      });
    }),
    gsap.registerPlugin(ScrollTrigger),
    ScrollTrigger.saveStyles(".mobile, .desktop"),
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".block-copy-1",
              scrub: 1,
              start: "center center",
              end: "+=2000",
            },
          })
          .from(".can-float-1", { rotate: -20, x: 300 })
          .from(".can-float-2", { rotate: -20, x: -300 })
          .from(".can-float-3", { rotate: -20, x: 300 });
      },
      "(max-width: 991px)": function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".block-copy-1",
              scrub: 1,
              start: "top bottom",
              end: "+=1500",
            },
          })
          .from(".can-float-1", { rotate: -20, x: 300 })
          .from(".can-float-2", { rotate: -20, x: -300 })
          .from(".can-float-3", { rotate: -20, x: 300 });
      },
    }),
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".block-product",
              scrub: 1,
              start: "center center",
              end: "+=1000",
              pin: !0,
            },
          })
          .from(".wrapper-can .can", { opacity: 0, scale: 0 })
          .from(".wrapper-can .circle", { scale: 0 })
          .from(".detail-light", { opacity: 0 })
          .from(".detail-light .line", { width: 0 })
          .from(".detail-bitterness", { opacity: 0 })
          .from(".detail-bitterness .line", { width: 0 })
          .from(".detail-taste", { opacity: 0 })
          .from(".detail-taste .line", { width: 0 })
          .from(".detail-body", { opacity: 0 })
          .from(".detail-body .line", { width: 0 })
          .from(".detail-ingredients", { opacity: 0 })
          .from(".detail-ingredients .line", { width: 0 })
          .from(".detail-nutrients", { opacity: 0 });
      },
      "(max-width: 991px)": function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".block-product",
              scrub: 1,
              start: "top bottom",
              end: "+=1100",
            },
          })
          .from(".detail-light", { opacity: 0, delay: 0.5 })
          .from(".detail-taste", { opacity: 0, delay: 0.5 })
          .from(".detail-bitterness", { opacity: 0, delay: 0.5 })
          .from(".wrapper-can .circle", { scale: 0, delay: 1 })
          .from(".detail-light .line", { height: 0 })
          .from(".detail-taste .line", { height: 0 })
          .from(".detail-bitterness .line", { height: 0 })
          .from(".wrapper-can .can", { opacity: 0, scale: 0 })
          .from(".detail-nutrients", { opacity: 0 })
          .from(".detail-ingredients", { opacity: 0 })
          .from(".detail-ingredients .line", { height: 0 })
          .from(".detail-body", { opacity: 0 })
          .from(".detail-body .line", { height: 0 });
      },
    }),
    "true" !== localStorage.verification &&
      (localStorage.setItem("verification", "false"),
      "false" === localStorage.verification &&
        (document.querySelector("body").classList.add("show-menu"),
        document.querySelector(".block-agegate").classList.add("active")),
      document.getElementById("ag-yes").addEventListener("click", (e) => {
        document.getElementById("check-ag").checked &&
          (localStorage.verification = "true"),
          document.querySelector("body").classList.remove("show-menu"),
          document.querySelector(".block-agegate").classList.remove("active");
      }),
      document.getElementById("ag-no").addEventListener("click", (e) => {
        window.location.href =
          "https://www.tapintoyourbeer.com/agegate?destination=es";
      })),
    (document.getElementById("registerForm").onsubmit = function (t) {
      t.preventDefault(),
        (function () {
          !(function () {
            for (
              var e = document.getElementsByClassName("error-message"), t = 0;
              t < e.length;
              t++
            )
              e[t].innerHTML = "";
          })();
          let t = document.getElementById("nombre").value,
            o = document.getElementById("apellido").value,
            n = document.getElementById("dia").value,
            r = document.getElementById("mes").value,
            i = document.getElementById("anio").value,
            a = document.getElementById("gender").value,
            l = document.getElementById("telefono").value,
            c = document.getElementById("email").value,
            s = document.querySelector('input[name="moments"]:checked');
          s && (moments = s.value);
          let d = document.getElementById("terms");
          if (d.checked) var m = d.checked;
          let u = document.getElementById("more-info").checked;
          if (!/^[a-zA-Zá-úÁ-Ú\s]+$/.test(t))
            return (
              e(
                "nombreError",
                "El Nombre solo debe contener letras y espacios."
              ),
              !1
            );
          if (!/^[a-zA-Zá-úÁ-Ú\s]+$/.test(o))
            return (
              e(
                "apellidoError",
                "El Apellido solo debe contener letras y espacios."
              ),
              !1
            );
          if (
            !/^[0-9]{1,2}$/.test(n) ||
            !/^[0-9]{1,2}$/.test(r) ||
            !/^[0-9]{4}$/.test(i)
          )
            return (
              e(
                "fechaError",
                "Fecha de cumpleaños debe contener números y respetar el formato indicado."
              ),
              !1
            );
          if ("" === a)
            return e("selectOptionError", "Seleccione una opción."), !1;
          if (!/^[0-9]+$/.test(l))
            return (
              e("telefonoError", "Teléfono solo debe contener números."), !1
            );
          if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(c))
            return e("emailError", "Formato de email no válido."), !1;
          if (!s) return e("radioGroupError", "Seleccione una opción."), !1;
          if (!d.checked)
            return (
              e("checkboxError", "Debe aceptar los términos y condiciones."), !1
            );
          let f = {
              nombre: t,
              apellido: o,
              dia: n,
              mes: r,
              anio: i,
              genero: a,
              telefono: l,
              email: c,
              moments: moments,
              termsValue: m,
              moreinfo: u,
            },
            g = JSON.stringify(f);
          fetch("guardarDatos.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: g,
          })
            .then((e) => {
              if (!e.ok) throw new Error("Error en la solicitud");
              document.getElementById("registerForm").reset(),
                (document.querySelector(".message-form p").textContent =
                  "Tu información ha sido enviada exitosamentes."),
                document.querySelector(".message-form").classList.add("show"),
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: ".message-form", offsetY: 0 },
                }),
                submit(f),
                setTimeout(() => {
                  document
                    .querySelector(".message-form")
                    .classList.remove("show");
                }, 1e4);
            })
            .catch((e) => {
              console.error("Error:", e),
                (document.querySelector(".message-form p").textContent =
                  "No se ha enviado la información. Inténtalo más tarde."),
                document.querySelector(".message-form").classList.add("show"),
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: ".message-form", offsetY: 0 },
                }),
                setTimeout(() => {
                  document
                    .querySelector(".message-form")
                    .classList.remove("show");
                }, 1e4);
            });
        })();
    }),
    document.getElementById("nombre").addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zá-úÁ-Ú\s]+/, "");
    }),
    document.getElementById("apellido").addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zá-úÁ-Ú\s]+/, "");
    }),
    document.getElementById("dia").addEventListener("input", function () {
      (this.value = this.value.replace(/[^0-9]+/, "")),
        parseInt(this.value) > 31 && (this.value = "31");
    }),
    document.getElementById("mes").addEventListener("input", function () {
      (this.value = this.value.replace(/[^0-9]+/, "")),
        parseInt(this.value) > 12 && (this.value = "12");
    }),
    document.getElementById("anio").addEventListener("input", function () {
      (this.value = this.value.replace(/[^0-9]+/, "")),
        parseInt(this.value) > 2005 && (this.value = "2005");
    }),
    document.getElementById("telefono").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]+/, "");
    });
});
