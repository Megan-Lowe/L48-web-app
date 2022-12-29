import Text from "#components/base/Text";
import ContactGridPartial from "../ContactGridPartial";

import styles from "./HomeGridPartial.module.scss";

export default function HomeGridPartial() {
  return (
    <div className={styles.container}>
      <div
        className="mx-auto bg-l48tan p-5 basis-1/2"
        style={{ gridArea: "H" }}
      >
        <Text variant="heading1" transform="uppercase" className="text-lg">
          HORIZON
        </Text>
        <Text color="black">
          <br />
          <b>September 3rd to February 28th, 2023</b> <br />
          Welcome to L48 Horizon! This recreational level program is for people
          who love to paddle but want to focus on skills and the paddling
          experience rather than competition. Whether you are brand new to
          paddling or have years of paddling of experience, you’ll love getting
          on the ocean in a fun, inclusive, and supportive environment. Paddlers
          will learn stoke technique, boat skills and canoe culture from coaches
          with years of paddling and coaching experience. Interested paddlers
          will have the opportunity to participate in local races. <br />
          <b>Coach:</b> Corey Teramura
          <br />
          <br />
          <b>Schedule:</b> Saturdays 10:30am and Tuesday 4:30pm <br />
          <b>Racing:</b> Sure... if you want to! <br /> <br />
          <b>Program Fees:</b> $280 for six month season (Saturday only option
          also available)
          <br /> <span className="ml-3">*</span>
          <i>
            Paddlers will need a yearly CORA membership at $30 in order to
            participate.
          </i>
          <br />
          Paddlers that have completed a successful OC1 recovery and have
          demonstrated competency in boat handling, have access to club OC1s and
          OC2 at no additional cost.
          <br />
          <b>button here</b>
        </Text>
      </div>

      <img
        className="w-full basis-1/2"
        src="/images/horizonprogram.jpeg"
        alt="a crew of paddlers wearing green jerseys aproach a bridge in their OC6"
        style={{ gridArea: "HImage" }}
      />

      <img
        className="w-full basis-1/2"
        src="/images/meridianprogram.jpeg"
        alt="a crew of paddlers wearing green jerseys aproach a bridge in their OC6"
        style={{ gridArea: "MImage" }}
      />

      <div
        className="mx-auto bg-l48green p-5 basis-1/2"
        style={{ gridArea: "M" }}
      >
        <Text
          variant="heading1"
          transform="uppercase"
          className="text-lg"
          color="black"
        >
          Meridian
        </Text>
        <Text color="black">
          <br />
          <b>September 3rd to February 28th, 2023</b> <br />
          The Meridian Program is ideal for new paddlers or experienced paddlers
          that want to train and race following a weekly training program but
          without the commitment required for the competitive team. Paddlers
          will develop skills in solo and 6 person outrigger canoes.
          Participants will have an opportunity to compete in local races, but
          fun and fitness are also primary goals for this program
          <br />
          <b>Coaches:</b> Jim Pearson and Bill Buckingham
          <br />
          <br />
          <b>Schedule:</b> OC6 Wednesday @ 6pm and Saturday @ 9am
          <br />
          <b>Racing:</b> This program regularly participates in local and
          provincial races. <br /> <br />
          <b>Program Fees:</b> $280 for six month season
          <br /> <span className="ml-3">*</span>
          <i>
            Paddlers will need a yearly CORA membership at $30 in order to
            participate.
          </i>
          <br />
          Paddlers that have completed a successful OC1 recovery and have
          demonstrated competency in boat handling, have access to club OC1s and
          OC2 at no additional cost.
          <br />
          <b>button here</b>
        </Text>
      </div>

      <div
        className="mx-auto bg-l48grey p-5 basis-1/2"
        style={{ gridArea: "C" }}
      >
        <Text variant="heading1" transform="uppercase" className="text-lg">
          Competitive
        </Text>
        <Text color="black">
          <br />
          <b>September 3rd to February 28th, 2023</b> <br />
          This program is for paddlers looking to train hard and race at a
          competitive level. The coaches work with paddlers to build fitness and
          develop their skills in all water conditions. Paddlers don’t need a
          lot of experience or a high level of skill to join but are expected to
          prioritize training sessions with their teammates and have
          accountability to each other and the coaches to attend practice and
          work towards being their best on and off the water. <br />
          <b>Coaches:</b> James Hill and Melanie Conard
          <br />
          <br />
          <b>Schedule:</b> Tuesday and Thursday @ 6pm and Sunday @ 9am <br />
          Additional OC1 training is an expectation for this program and regular
          OC1 time trials are part of crew selections.
          <br />
          <b>Racing:</b> The competitive team competes in local, regional and
          international races through the late fall, spring and summer.
          <br /> <br />
          <b>Program Fees:</b> $320 for 6 month season
          <br /> <span className="ml-3">*</span>
          <i>
            Paddlers will need a yearly CORA membership at $30 in order to
            participate.
          </i>
          <br />
          Paddlers that have completed a successful OC1 recovery and have
          demonstrated competency in boat handling, have access to club OC1s and
          OC2 at no additional cost.
          <br />
          <b>button here</b>
        </Text>
      </div>

      <img
        className="w-full basis-1/2"
        src="/images/compprogram.jpeg"
        alt="a crew of paddlers wearing green jerseys aproach a bridge in their OC6"
        style={{ gridArea: "CImage" }}
      />
      <div className="mx-auto bg-black p-5 basis-1/2" style={{ gridArea: "L" }}>
        <Text
          variant="heading1"
          transform="uppercase"
          className="text-lg"
          color="l48green"
        >
          Learn to Outrigger
        </Text>
        <Text color="white">
          <br />
          <u>
            We will be back with more learn to outrigger sessions in the early
            spring - until then check out our horizon program!
          </u>
          <br />
          <br />
          Learn to paddle outrigger with Latitude 48! In four Saturday sessions,
          we will introduce you to paddling outrigger canoe. You’ll learn all
          about the boats, the paddling stroke, how to recover an overturned
          boat, and how to navigate the Victoria inner, middle and outer harbor.
          The course will primarily be focused on OC6 (6 person canoe) but
          interested participants will have the opportunity to try solo boats as
          well. Paddles, lifejackets and all the equipment you will need to
          learn will be provided. Upon completion of this introductory course
          new paddlers will be ready to continue to one of our regular programs.
          <br />
          <b>Coaches:</b> Jeff Spear and Elizabeth Lee​
          <br />
          <br />
          <b>Schedule:</b> Sessions will be announced early 2023 for the spring!
          <br />
          <b>Racing:</b> Let's save that for later <br /> <br />
          <b>Program Fees:</b> $80 for four 1.5 hour sessions
          <br /> <span className="ml-3">*</span>
          <i>
            Paddlers will need a yearly CORA membership at $30 in order to
            participate.
          </i>
          <br />
          <b>button here</b>
        </Text>
      </div>
      <img
        className="w-full basis-1/2"
        src="/images/learnprogram.jpeg"
        alt="a crew of paddlers wearing green jerseys aproach a bridge in their OC6"
        style={{ gridArea: "LImage" }}
      />
      <div
        className="mx-auto bg-l48muted p-5 basis-1/2"
        style={{ gridArea: "P" }}
      >
        <Text
          variant="heading1"
          transform="uppercase"
          className="text-lg"
          color="black"
        >
          Private Coaching
        </Text>
        <Text color="black">
          <br />
          Latitude 48's coaches are available for one-on-one or small group
          coaching to both members and non-members. Our coaches have experience
          coaching and racing with dragonboat and outrigger teams from novice
          all the way up to world competition level. L48 coaches can bring a
          unique perspective to your training and provide insight into how to
          achieve your paddling goals, whatever they may be.
          <br /> <br />
          <b>Program Fees:</b> $50 for 60-90 minute session, $70 for two people
          *Non-club members that need access to an OC1 will pay an additional
          $20
          <br />
          <br />
          <span className="ml-3">*</span>
          <i>
            Paddlers will need a yearly CORA membership at $30 in order to
            participate.
          </i>
          <br />
          <b>button here</b>
        </Text>
      </div>
      <img
        className="w-full basis-1/2"
        src="/images/privateprogram.jpeg"
        alt="a crew of paddlers wearing green jerseys aproach a bridge in their OC6"
        style={{ gridArea: "PImage" }}
      />

      <ContactGridPartial />
    </div>
  );
}
