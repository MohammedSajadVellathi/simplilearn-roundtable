export default function Hero() {
  return (
    <>
      {/* PAGE 1 – HERO */}
      <section
        className="relative"
        style={{
          height: "693px",
          width: "1500px",
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="/images/simplilearn-logo.png"
          alt="Simplilearn"
          style={{
            position: "absolute",
            top: "54px",
            left: "93px",
            width: "280px",
            height: "86px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "207px",
            left: "100px",
            width: "190px",
            height: "55px",
            backgroundColor: "#00FFFF",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <img
            src="/images/Invite-Only.png"
            alt="Invite Only"
            style={{
              width: "129px",
              height: "34px",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "220px",
            left: "300px",
            width: "324px",
            height: "28px",
            fontFamily: "Satoshi-Bold",
            fontSize: "22px",
            fontWeight: 500,
            color: "#00FFFF",
            lineHeight: "28px",
          }}
        >
          An Executive Roundtable · Lunch
        </div>

        <img
          src="/images/Heading_1.png"
          alt="Hero Headline"
          style={{
            position: "absolute",
            top: "303px",
            left: "96px",
            width: "771px",
            height: "186px",
          }}
        />

        {/* Calendar */}
        <div
          style={{
            position: "absolute",
            top: "550px",
            left: "102px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/images/calender_simlilearn.png"
            alt="Calendar"
            style={{ width: "27px", height: "27px" }}
          />
          <span
            style={{
              fontFamily: "Satoshi-Bold",
              fontSize: "25px",
              color: "#FFFFFF",
            }}
          >
            February 20, 2026
          </span>
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            top: "620px",
            left: "102px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/images/location.webp"
            alt="Location"
            style={{ width: "24px", height: "24px" }}
          />
          <span
            style={{
              fontFamily: "Satoshi-Bold",
              fontSize: "26px",
              color: "#FFFFFF",
            }}
          >
            Chamberlain’s Steak & Fish House, Dallas
          </span>
        </div>
      </section>

      {/* PAGE 2 – WHITE SECTION */}
      <section
        style={{
          height: "693px",
          width: "1550px",
          backgroundColor: "#FFFFFF",
          position: "relative",
        }}
      >
    {/* RSVP Input */}
    <div
    style={{
        position: "absolute",
        top: "50px",
        left: "150px",
        width: "551px",
        height: "56px",
        display: "flex",
        gap: "80px",
    }}
    >
         <div
    style={{
      position: "relative",
      width: "430px",
      height: "56px",
    }}
  >
    <img
      src="/images/maillogo.png"
      alt="Mail"
      style={{
        position: "absolute",
        top: "55%",
        left: "16px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
      }}
    />
    
    <input
        type="email"
        placeholder="Work email to confirm your attendance"
        style={{
        width: "100%",
        height: "100%",
        paddingLeft: "52px",
        paddingRight: "20px",
        backgroundColor: "#424241",
        border: "2px solid #D1D5DB",
        borderRadius: "8px",
        fontSize: "18px",
        fontFamily: "Satoshi-Bold",
        color: "#FFFFFF",
        outline: "none",
        }}
    />
    </div>
    <button
        style={{
            width: "170px",
            height: "56px",
            marginTop: "2px",
            backgroundColor: "#F2B35C",
            borderRadius: "8px",
            fontFamily: "Satoshi-Bold",
            fontSize: "18px",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
        }}
    >
        RSVP Now
    </button>
    {/* Text below RSVP */}
{/* Text below RSVP */}
    <img
    src="/images/text2.png"
    alt="Supporting text"
    style={{
        position: "absolute",
        top: "100px",
        left: "1px",
        width: "1240px",
        height: "auto",
    }}
    />
    {/* Text below text2 */}
    <img
    src="/images/text3.png"
    alt="Section heading"
    style={{
        position: "absolute",
        top: "350px",
        left: "245px",
        width: "703px",
        height: "90px",
    }}
    />
    <img
    src="/images/text4.png"
    alt="Section heading"
    style={{
        position: "absolute",
        top: "512px",
        left: "1px",
        width: "1240px",
        height: "auto",
    }}
    />
    </div>
       {/* Second page content will go here */}
      </section>
      {/* PAGE 3 – LIGHT BLUE SECTION */}
    <section
    style={{
        width: "1500px",
        height: "693px",
        backgroundColor: "#D2E1FF80",
        position: "relative",
        borderWidth: "1px",
    }}
    >
    {/* Page 3 main image */}
    <img
    src="/images/page3.png"
    alt="Page 3 visual"
    style={{
        position: "absolute",
        top: "63px",
        left: "104px",
        width: "1240px",
        height: "570px",
        borderRadius: "8px",
    }}
    />
    </section>
    {/* PAGE 4 */}
    <section
    style={{
        width: "1550px",
        height: "1764px",
        position: "relative",
    }}
    >
    <img
        src="/images/page4.png"
        alt="Page 4"
        style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "1500px",
        height: "1764px",
        }}
    />
    </section>
         <section
        style={{
          height: "850px",
          width: "1550px",
          backgroundColor: "#FFFFFF",
          position: "relative",
        }}
      >
        {/* Page 5 image */}
    <img
    src="/images/page4img1.png"
    alt="Page 5 visual"
    style={{
        position: "absolute",
        top: "150px",
        left: "847px",
        width: "570px",
        height: "611px",
    }}
    />
     <img
    src="/images/page5img2.png"
    alt="Section heading"
    style={{
        position: "absolute",
        top: "70px",
        left: "40px",
        width: "703px",
        height: "105px",
    }}
    />
     <img
    src="/images/page5img3.png"
    alt="Section heading"
    style={{
        position: "absolute",
        top: "240px",
        left: "105px",
        width: "242px",
        height: "25px",
    }}
    />
    <img
    src="/images/page5img4.png"
    alt="Supporting text"
    style={{
        position: "absolute",
        top: "300px",
        left: "105px",
        width: "3px",
        height: "59px",
    }}
    />

     <img
        src="/images/page5img4.png"
        alt="Supporting text"
        style={{
            position: "absolute",
            top: "390px",
            left: "105px",
            width: "3px",
            height: "59px",
        }}
        />
        <img
        src="/images/page5img4.png"
        alt="Supporting text"
        style={{
            position: "absolute",
            top: "480px",
            left: "105px",
            width: "3px",
            height: "59px",
        }}
        />

        <img
        src="/images/page5img4.png"
        alt="Supporting text"
        style={{
            position: "absolute",
            top: "570px",
            left: "105px",
            width: "3px",
            height: "59px",
        }}
        />
        <img
        src="/images/page5img4.png"
        alt="Supporting text"
        style={{
            position: "absolute",
            top: "660px",
            left: "105px",
            width: "3px",
            height: "59px",
        }}
        />
        <img
            src="/images/page5img6.png"
            alt="Section heading"
            style={{
                position: "absolute",
                top: "300px",
                left: "400px",
                width: "703px",
                height: "375px",
            }}
        />



    <div
    style={{
        position: "absolute",
        top: "760px",
        left: "105px",
        width: "651px",
        height: "100px",
        display: "flex",
        gap: "73px",
    }}
    >
    <div
    style={{
      position: "relative",
      width: "430px",
      height: "56px",
    }}
  >
    <img
      src="/images/maillogo.png"
      alt="Mail"
      style={{
        position: "absolute",
        top: "55%",
        left: "16px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
      }}
    />
    
    <input
        type="email"
        placeholder="Work email to confirm your attendance"
        style={{
        width: "100%",
        height: "100%",
        paddingLeft: "52px",
        paddingRight: "20px",
        backgroundColor: "#424241",
        border: "2px solid #D1D5DB",
        borderRadius: "8px",
        fontSize: "18px",
        fontFamily: "Satoshi-Bold",
        color: "#FFFFFF",
        outline: "none",
        }}
    />
    </div>
    <button
        style={{
            width: "170px",
            height: "56px",
            marginTop: "2px",
            backgroundColor: "#F2B35C",
            borderRadius: "8px",
            fontFamily: "Satoshi-Bold",
            fontSize: "18px",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
        }}
    >
        RSVP Now
    </button>
    </div>
      </section>

      <section
    style={{
        width: "1500px",
        height: "693px",
        backgroundColor: "#00FFFF",
        position: "relative",
        borderWidth: "1px",
    }}
    >
          <img
    src="/images/page6.png"
    alt="Section heading"
    style={{
        position: "absolute",
        width: "1500px",
        height: "693px",
        top: "0px",
        left: "0px",

    }}
    />
    </section>
    
    <section
        style={{
          height: "950px",
          width: "1550px",
          backgroundColor: "#FFFFFF",
          position: "relative",
        }}
      >
    <img
    src="/images/page7img1.png"
    alt="Section heading"
    style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "1500px",
        height: "500px",
    }}
    />
        <img
        src="/images/Space is limited..png"
        alt="Supporting text"
        style={{
            position: "absolute",
            top: "50px",
            left: "140px",
            width: "250px",
            height: "35px",
        }}
        />
        <img
          src="/images/simplilearn-logo.png"
          alt="Simplilearn"
          style={{
            position: "absolute",
            top: "350px",
            left: "93px",
            width: "286px",
            height: "90px",
          }}
        />
    <div
    style={{
        position: "absolute",
        top: "160px",
        left: "135px",
        width: "651px",
        height: "300px",
        display: "flex",
        gap: "73px",
    }}
    >
    <div
    style={{
      position: "relative",
      width: "430px",
      height: "58px",
    }}
  >
    <img
      src="/images/maillogo.png"
      alt="Mail"
      style={{
        position: "absolute",
        top: "55%",
        left: "16px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
      }}
    />
    
    <input
        type="email"
        placeholder="Work email to confirm your attendance"
        style={{
        width: "100%",
        height: "100%",
        paddingLeft: "52px",
        paddingRight: "20px",
        backgroundColor: "#424241",
        border: "2px solid #D1D5DB",
        borderRadius: "8px",
        fontSize: "18px",
        fontFamily: "Satoshi-Bold",
        color: "#FFFFFF",
        outline: "none",
        }}
    />
    </div>
    <button
        style={{
            width: "170px",
            height: "58px",
            marginTop: "2px",
            backgroundColor: "#F2B35C",
            borderRadius: "8px",
            fontFamily: "Satoshi-Bold",
            fontSize: "18px",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
        }}
    >
        RSVP Now
    </button>
    </div>   

    {/* Footer copyright */}
<div
  style={{
    position: "absolute",
    bottom: "540px",
    left: "400px",
    width: "100%",
    textAlign: "center",
    fontFamily: "Satoshi-Bold",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    color: "#ffffff",
  }}
>
  © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
</div>

    </section>
    </>
  );
}
