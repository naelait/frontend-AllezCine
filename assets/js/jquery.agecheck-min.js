! function(e) {
  e.ageCheck = function(r) {
    const t = e.extend({
        minAge: 18,
        redirectTo: "",
        redirectOnFail: "http://www.imdb.com/",
        title: "Age Verification",
        copy: "This Website requires you to be [18] years or older to enter. Please enter your Date of Birth in the fields below in order to continue:",
        successMsg: {
          header: "Success!",
          body: "You are now being redirected back to the website..."
        },
        underAgeMsg: "Sorry, you are not old enough to view this site...",
        errorMsg: {
          invalidDay: "Day is invalid or empty",
          invalidYear: "Year is invalid or empty"
        }
      }, r),
      a = {
        month: "",
        day: "",
        year: "",
        age: "",
        errors: [],
        setValues() {
          const r = e(".ac-container .month").val(),
            t = e(".ac-container .day").val();
          a.month = r, a.day = t.replace(/^0+/, ""), a.year = e(".ac-container .year").val()
        },
        validate: () => (a.errors = [], !1 === /^([0-9]|[12]\d|3[0-1])$/.test(a.day) && a.errors.push(t.errorMsg.invalidDay), !1 === /^(19|20)\d{2}$/.test(a.year) && a.errors.push(t.errorMsg.invalidYear), a.clearErrors(), a.displayErrors(), a.errors.length < 1),
        clearErrors() {
          e(".errors").html("")
        },
        displayErrors() {
          let r = "<ul>";
          for (let e = 0; e < a.errors.length; e++) r += `<li><span>x</span>${a.errors[e]}</li>`;
          r += "</ul>", setTimeout(() => {
            e(".ac-container .errors").html(r)
          }, 200)
        },
        reCenter(r) {
          r.css("top", `${Math.max(0,(e(window).height()-(r.outerHeight()+150))/2)}px`), r.css("left", `${Math.max(0,(e(window).width()-r.outerWidth())/2)}px`)
        },
        buildHtml() {
          const r = t.copy,
            o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let n = "";
          n += '<div class="ac-overlay"></div>', n += '<div class="ac-container">', n += `<h2>${t.title}</h2>`, n += `<p>${r.replace("[21]",`<strong>${t.minAge}</strong>`)}`, n += '<div class="errors"></div>', n += '<div class="fields"><select class="month">';
          for (let e = 0; e < o.length; e++) n += `<option value="${e}">${o[e]}</option>`;
          n += "</select>", n += '<input class="day" maxlength="2" placeholder="01" />', n += '<input class="year" maxlength="4" placeholder="1989"/>', n += "<button>Submit</button></div></div>", e("body").append(n), e(".ac-overlay").animate({
            opacity: .8
          }, 500, () => {
            a.reCenter(e(".ac-container")), e(".ac-container").css({
              opacity: 1
            })
          }), e(".ac-container .day, .ac-container .year").focus(function() {
            e(this).removeAttr("placeholder")
          })
        },
        setAge() {
          a.age = "";
          const e = new Date(a.year, a.month, a.day),
            r = Date.now() - e.getTime(),
            t = new Date(r);
          a.age = Math.abs(t.getUTCFullYear() - 1970)
        },
        setSessionStorage(e, r) {
          try {
            return sessionStorage.setItem(e, r), !0
          } catch (e) {
            return !1
          }
        },
        handleSuccess() {
          const r = `<h3>${t.successMsg.header}</h3><p>${t.successMsg.body}</p>`;
          e(".ac-container").html(r), setTimeout(() => {
            e(".ac-container").animate({
              top: "-350px"
            }, 200, () => {
              e(".ac-overlay").animate({
                opacity: "0"
              }, 500, () => {
                "" !== t.redirectTo ? window.location.replace(t.redirectTo) : e(".ac-overlay, .ac-container").remove()
              })
            })
          }, 2e3)
        },
        handleUnderAge() {
          const r = `<h3>${t.underAgeMsg}</h3>`;
          e(".ac-container").html(r), "" !== t.redirectOnFail && setTimeout(() => {
            window.location.replace(t.redirectOnFail)
          }, 2e3)
        }
      };
    if ("true" === sessionStorage.getItem("ageVerified")) return !1;
    a.buildHtml(), e(".ac-container button").on("click", () => {
      a.setValues(), !0 === a.validate() && (a.setAge(), a.age >= t.minAge ? (a.setSessionStorage("ageVerified", "true") || console.log("sessionStorage not supported by your browser"), a.handleSuccess()) : a.handleUnderAge())
    }), e(window).resize(() => {
      a.reCenter(e(".ac-container")), setTimeout(() => {
        a.reCenter(e(".ac-container"))
      }, 500)
    })
  }
}(jQuery);

$(document).ready($.ageCheck())
