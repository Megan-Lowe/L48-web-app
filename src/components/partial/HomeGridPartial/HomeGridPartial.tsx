import Text from "#components/base/Text";

import styles from "./HomeGridPartial.module.scss";

export default function HomeGridPartial() {
  return (
    <div>
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
            Welcome to L48 Horizon! This recreational level program is for
            people who love to paddle but want to focus on skills and the
            paddling experience rather than competition. Whether you are brand
            new to paddling or have years of paddling of experience, you’ll love
            getting on the ocean in a fun, inclusive, and supportive
            environment. Paddlers will learn stoke technique, boat skills and
            canoe culture from coaches with years of paddling and coaching
            experience. Interested paddlers will have the opportunity to
            participate in local races. <br />
            <b>Coach:</b> Corey Teramura
            <br />
            <br />
            <b>Schedule:</b> Saturdays 10:30am and Tuesday 4:30pm <br />
            <b>Racing:</b> Sure... if you want to! <br /> <br />
            <b>Program Fees:</b> $280 for six month season (Saturday only option
            also available)
            <br />*
            <i>
              Paddlers will need a yearly CORA membership at $30 in order to
              participate.
            </i>
            <br />
            Paddlers that have completed a successful OC1 recovery and have
            demonstrated competency in boat handling, have access to club OC1s
            and OC2 at no additional cost.
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
            The Meridian Program is ideal for new paddlers or experienced
            paddlers that want to train and race following a weekly training
            program but without the commitment required for the competitive
            team. Paddlers will develop skills in solo and 6 person outrigger
            canoes. Participants will have an opportunity to compete in local
            races, but fun and fitness are also primary goals for this program
            <br />
            <b>Coaches:</b> Jim Pearson and Bill Buckingham
            <br />
            <br />
            <b>Schedule:</b> OC6 Wednesday @ 6pm and Saturday @ 9am
            <br />
            <b>Racing:</b> This program regularly participates in local and
            provincial races. <br /> <br />
            <b>Program Fees:</b> $280 for six month season
            <br />*
            <i>
              Paddlers will need a yearly CORA membership at $30 in order to
              participate.
            </i>
            <br />
            Paddlers that have completed a successful OC1 recovery and have
            demonstrated competency in boat handling, have access to club OC1s
            and OC2 at no additional cost.
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
            competitive level. The coaches work with paddlers to build fitness
            and develop their skills in all water conditions. Paddlers don’t
            need a lot of experience or a high level of skill to join but are
            expected to prioritize training sessions with their teammates and
            have accountability to each other and the coaches to attend practice
            and work towards being their best on and off the water. <br />
            <b>Coaches:</b> James Hill and Melanie Conard
            <br />
            <br />
            <b>Schedule:</b> Tuesday and Thursday @ 6pm and Sunday @ 9am <br />
            Additional OC1 training is an expectation for this program and
            regular OC1 time trials are part of crew selections.
            <br />
            <b>Racing:</b> The competitive team competes in local, regional and
            international races through the late fall, spring and summer.
            <br /> <br />
            <b>Program Fees:</b> $320 for 6 month season
            <br />*
            <i>
              Paddlers will need a yearly CORA membership at $30 in order to
              participate.
            </i>
            <br />
            Paddlers that have completed a successful OC1 recovery and have
            demonstrated competency in boat handling, have access to club OC1s
            and OC2 at no additional cost.
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

        <div />
      </div>
    </div>
  );
}
