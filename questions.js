// questions.js
const g1QuestionsDatabase = [
    {
        question: "As a G1 driver, your blood alcohol level must be completely zero. You must also be accompanied by a fully licensed driver who has at least how many years of driving experience?",
        options: ["2 years", "3 years", "4 years", "5 years"],
        correct: "4 years",
        explanation: "The accompanying driver must hold a valid Ontario Class G license (or higher) and have at least 4 years of driving experience. Their blood alcohol limit must also be under 0.05%."
    },
    {
        question: "The accompanying driver's blood alcohol must be under:",
        options: ["0.07%, or 0.0% if under 21", "0.05%, or 0.0% if under 21", "0.0%", "0.07%"],
        correct: "0.05%, or 0.0% if under 21",
        explanation: "The accompanying driver must maintain a blood alcohol limit less than 0.05%. If they are under 21, it must be 0.0%."
    },
    {
        question: "When two vehicles reach an uncontrolled intersection at approximately the same time, right-of-way should be given to:",
        options: ["The vehicle on the left", "The vehicle on the right", "The vehicle signaling to turn right", "The larger vehicle"],
        correct: "The vehicle on the right",
        explanation: "At an intersection without signs or signals, you must yield the right-of-way to any vehicle approaching from your right."
    },
    {
        question: "Under the Ontario demerit point system, a fully licensed driver will receive a warning letter after accumulating how many points?",
        options: ["6 points", "9 points", "2 points", "15 points"],
        correct: "6 points",
        explanation: "For fully licensed drivers, a warning letter is sent at 6 points. At 9 points, you may be required to attend an interview. For G1/G2 drivers, a warning letter is triggered at 2 points."
    },
    {
        question: "When a school bus is stopped on a road without a median strip and its red lights are flashing, you must stop:",
        options: ["Only if you are behind the bus", "At least 20 metres away if approaching from behind", "At least 5 metres away if approaching from behind", "Only if you are approaching from the front"],
        correct: "At least 20 metres away if approaching from behind",
        explanation: "If you are coming from behind, you must stop at least 20 metres away from a stopped school bus with red lights flashing unless there is a physical highway median divider. When in front, you must stop far enough for children to exit the bus safely."
    },
    {
        question: "Unless otherwise posted, the maximum speed limit on roads inside a city, town, or village is:",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correct: "50 km/h",
        explanation: "In Ontario, the statutory speed limit within cities, towns, villages, and built-up areas is 50 km/h unless signs state otherwise."
    },
    {
        question: "Unless otherwise posted, the maximum speed limit on roads outside a city, town, or village is:",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correct: "80 km/h",
        explanation: "In Ontario, the statutory speed limit outside of cities, towns, villages, and built-up areas is 80 km/h unless signs state otherwise."
    },
    {
        question: "Snowplows flash primarily what colour?",
        options: ["Amber", "Blue", "White", "Red"],
        correct: "Blue",
        explanation: "While they technically also flash amber, their lights are mainly blue."
    },
    {
        question: "What is black ice?",
        options: ["A layer of black-coloured ice", "When roads are flooded", "When ice is mixed with snow", "A thin layer of transparent ice"],
        correct: "A thin layer of transparent ice",
        explanation: "Black ice is a thin, nearly invisible layer of transparent ice that forms on roads, bridges, and sidewalks, appearing as a dark, wet surface. Because it is clear, the black asphalt beneath is visible, making it extremely difficult for drivers and pedestrians to spot.  It causes a rapid loss of traction, making it a major cause of winter vehicle accidents."
    },
    {
        question: "What must drivers do at pedestrian crossovers and school crossings?",
        options: ["Nothing, drive normally.", "Stop and wait until all pedestrians, including school crossing guards have completely crossed the road.", "Slow down and wait until all pedestrians have almost crossed the road.", "Slow down and proceed with caution."],
        correct: "Stop and wait until all pedestrians, including school crossing guards have completely crossed the road.",
        explanation: "Drivers can be fined up to $500 and get 3 demerit points for not abiding with this law."
    },
    {
        question: "Snowplows flash primarily what colour?",
        options: ["Amber", "Blue", "White", "Red"],
        correct: "Blue",
        explanation: "While they technically also flash amber, their lights are mainly blue."
    },
    {
        question: "Which statement is correct regarding red lights?",
        options: [
            "You may turn right on a red light, unless otherwise posted, provided you stop first.",
            "Come to a complete stop and then proceed.",
            "If you are in a hurry, you may drive through red lights with caution only if the way is clear.",
            "All of the above."
        ],
        correct: "You may turn right on a red light, unless otherwise posted, provided you stop first.",
        explanation: "You must always come to a complete stop at the appropriate road markings or intersection edge on a red light before making any turns."
    },
    {
        question: "When approaching a stopped emergency vehicle with its sirens or red lights flashing or a tow truck with amber lights flashing, you must...?",
        options: [
            "Slow down and drive cautiously. You must leave one lane clearance between you and an emergency vehicle if there are multiple lanes in your direction.",
            "Nothing.",
            "Slow down, stop and pull over to the right.",
            "Slow down, stop and pull over to the left."
        ],
        correct: "Slow down and drive cautiously. You must leave one lane clearance between you and an emergency vehicle if there are multiple lanes in your direction.",
        explanation: "For a first offence you can be fined $400-$2000, get 3 demerit points and possible license suspension."
    },
    {
        question: "If a traffic light is red, but there is a green arrow pointing left, what does that mean?",
        options: [
            "Vehicles in the left turning lane may turn left.",
            "No vehicles may turn- only pedestrians may cross.",
            "The direction of the green arrow indicates there is a one-way street.",
            "All of the above."
        ],
        correct: "Vehicles in the left turning lane may turn left.",
        explanation: "A green arrow pointing left gives right of way to the cars turning left unless there are still pedestrians crossing."
    },
    {
        question: "What level must your blood alcohol level be if you hold a class G1 license?",
        options: [
            "Less than 0.05.",
            "Less than 0.07.",
            "Less than 0.08.",
            "0.0"
        ],
        correct: "0.0",
        explanation: "If you are caught drinking and driving, you can face a licence suspension of up to 30 days, as well as a $450 penalty."
    },
    {
        question: "What should you do when you feel drowsy while driving?",
        options: [
            "Nothing.",
            "Speed up.",
            "Take a nap off the road in a safe area.",
            "Call your boss to tell him your arriving in 5 minutes."
        ],
        correct: "Take a nap off the road in a safe area.",
        explanation: "Driving while drowsy is linked to many accidents, so ensure you are well-rested and alert."
    },
    {
        question: "If you find yourself at an intersection facing a red light and a police officer instructing traffic tells you to go straight what should you do?",
        options: [
            "Stop and ignore the officer.",
            "Wave back.",
            "Follow the officers directions.",
            "Park the car and ask the officer what is happening."
        ],
        correct: "Follow the officers directions.",
        explanation: "Always follow the directions of a police officer that is directing traffic."
    },
    {
        question: "High occupancy vehicle lanes on a provincial highways are reserved for vehicles carrying at least how many passengers?",
        options: [
            "Driver, plus 1 other passenger.",
            "Driver, plus 2 other passengers.",
            "Driver, plus 3 other passengers.",
            "Driver, plus 4 other passengers."
        ],
        correct: "Driver, plus 1 other passenger.",
        explanation: "Other roadways will specify the number required. Obey the number of passengers required or risk getting a fine and demerit points."
    },
    {
        question: "To make a U-turn you must be able to see how far in both directions?",
        options: [
            "50 m.",
            "100 m.",
            "150 m.",
            "200 m."
        ],
        correct: "150 m.",
        explanation: "It is illegal to make a U-turn on a curve in the road, on or near a railway crossing or hilltop, or near a bridge or tunnel that blocks your view. Never make a U-turn unless you can see at least 150 metres in both directions."
    },
    {
        question: "What are you required to do if a police officer signals you to pull over?",
        options: [
            "Slow down, safely pull over in the left lane and come to a complete stop.",
            "Slow down, safely pull over in the right lane and come to a complete stop.",
            "Slow down and stop in the lane you are in.",
            "Signal and stop at the next intersection and wait for the police officer."
        ],
        correct: "Slow down, safely pull over in the right lane and come to a complete stop.",
        explanation: "Do not get out of your vehicle. Wait for the police officer to come to you."
    },
    {
        question: "What must you do when approaching a flashing yellow traffic light?",
        options: [
            "Slow down and drive with caution.",
            "Turn left.",
            "Stop and turn left.",
            "Stop and proceed when it is safe."
        ],
        correct: "Slow down and drive with caution.",
        explanation: "A flashing yellow light means you must slow down, proceed with caution, and yield to pedestrians or other vehicles. Treat it much like a yield sign."
    },
    {
        question: "What does a flashing red traffic light mean?",
        options: [
            "Slow down and drive with caution.",
            "Stop and proceed when it is safe.",
            "Nothing.",
            "Stop, and go back where you came from, no entry in this area."
        ],
        correct: "Stop and proceed when it is safe.",
        explanation: "Always bring your vehicle to a full stop when stopping at a red flashing light. Treat it like a stop sign."
    },
    {
        question: "What do two parallel white lines at an intersection represent?",
        options: [
            "They indicate a crosswalk for pedestrians.",
            "They indicate there is a one-way street to the right.",
            "These solid lines indicate there is no passing in either direction.",
            "These do not indicate anything different from the directions."
        ],
        correct: "They indicate a crosswalk for pedestrians.",
        explanation: "Intersections may have a stop line, parallel lines or a sidewalk. If these are absent, stop at the intersection edge in order to allow pedestrians to cross; and remember, no passing within 30 m of a crosswalk."
    },
    {
        question: "What should you do if you hit a deer/moose?",
        options: [
            "Try to move the animal off the road so other vehicles will not hit it.",
            "Nothing, continue on.",
            "Report the incident to the ministry of natural resources or local police.",
            "Flee the scene."
        ],
        correct: "Report the incident to the ministry of natural resources or local police.",
        explanation: "Never try to move an injured animal as it may increase your chances of being hit by another vehicle."
    },
    {
        question: "When parking uphill with a curb, what should you do?",
        options: [
            "Turn your tires to the left to catch the curb if your vehicle rolls backward.",
            "Turn your tires to the right to catch the curb if your vehicle rolls backward.",
            "Make your tires straight and parallel with the curb.",
            "The direction of your tires does not matter as long as you set the parking brake."
        ],
        correct: "Turn your tires to the left to catch the curb if your vehicle rolls backward.",
        explanation: "Turn your tires to the left and set your parking brake, always do both."
    },
    {
        question: "Can you turn left on a red light from a one-way road onto a one-way road?",
        options: [
            "Yes, if you signal, stop first in the farthest left lane and then proceed when the way is clear.",
            "No.",
            "No you cannot as the law states so.",
            "Left turns are only permitted from two-way roads to two-way roads on a green light."
        ],
        correct: "Yes, if you signal, stop first in the farthest left lane and then proceed when the way is clear.",
        explanation: "Ensure you yield to pedestrians and traffic after first coming to a complete stop."
    },
    {
        question: "How many passengers may you have in a vehicle if you have class G1 license?",
        options: [
            "None.",
            "1.",
            "As many as there are working seatbelts.",
            "None of the above."
        ],
        correct: "As many as there are working seatbelts.",
        explanation: "Included must be a class G driver, meeting all requirements, in the front passenger seat and must be the only other passenger in the front seat with you. All other passengers must have working seatbelts."
    },
    {
        question: "What is the hand signal for turning left?",
        options: [
            "Left arm extended straight out",
            "Left arm out and angled upwards",
            "Left arm out and angled downwards",
            "None of the above"
        ],
        correct: "Left arm extended straight out",
        explanation: "If your turn signals are broken, use hand signals."
    },
    {
        question: "You must share the road with motorcycles, cyclists, commercial vehicles, pedestrians, farm machinery, and buses?",
        options: [
            "The above statement is false.",
            "The above statement is true.",
            "All of the above are correct except for farm machinery.",
            "All of the above are correct except for pedestrians because they are not in a vehicle."
        ],
        correct: "The above statement is true.",
        explanation: "You should know the importance of sharing the road with other road users, especially large vehicles, school buses, cyclists, and pedestrians, as well as how to share the road with other road users safely and appropriately."
    },
    {
        question: "How far away must headlights and rear lights be seen?",
        options: [
            "From 50m away.",
            "From 150m away.",
            "From 1150m away.",
            "They must be seen clearly in the dark."
        ],
        correct: "From 150m away.",
        explanation: "You must also have your rear license plate illuminated with lighting when headlights are on. Ensure headlights are on 1/2 an hour before sunset and leave them on for 1/2 an hour after sunrise."
    },
    {
        question: "When can you pass on a shoulder?",
        options: [
            "Only if a vehicle is turning left and you have an unpaved shoulder on the right.",
            "Only if a vehicle is turning left and you have a paved shoulder on the right.",
            "Whenever the vehicle in front of you is moving under 40 km/h.",
            "Whenever you can do so safely."
        ],
        correct: "Only if a vehicle is turning left and you have a paved shoulder on the right.",
        explanation: "Passing is generally done from the left but you can pass on the right in this case if there is another vehicle turning left and only if the shoulder is paved."
    },
    {
        question: "When involved in or witness to an accident where someone has been injured, you should...?",
        options: [
            "Call or have someone else call for help immediately.",
            "Turn off the vehicle and turn on the emergency lights.",
            "If you are not injured, stay calm and offer help until emergency services arrive.",
            "All of the above."
        ],
        correct: "All of the above.",
        explanation: "Stay calm and cover accident victims with a blanket or jacket to reduce shock."
    },
    {
        question: "What does compulsory automobile insurance mean?",
        options: [
            "You must have a valid driver's license to drive on roads.",
            "Any passenger must have insurance.",
            "You must have insurance coverage to drive.",
            "All passengers must have insurance."
        ],
        correct: "You must have insurance coverage to drive.",
        explanation: "You must show proof that you have insurance coverage before you can register a vehicle or renew your registration. The Financial Services Regulatory Authority of Ontario (FSRA), regulates insurance in Ontario. Visit FSRA's website for more information on auto insurance."
    },
    {
        question: "Which of these situations may result in a driving suspension after a court order?",
        options: [
            "If you have a medical condition that affects your driving ability.",
            "If you do not have your vehicle properly insured.",
            "If you drive over the speed limit by 50 km/h or greater.",
            "All of the above."
        ],
        correct: "All of the above.",
        explanation: "You need to abide by all safety measures affecting you, others, and your vehicle."
    },
    {
        question: "If 2 vehicles come to an uncontrolled intersection at the same time, who has the right-of-way?",
        options: [
            "The vehicle on the right.",
            "The vehicle on the left.",
            "The vehicle turning right.",
            "The vehicle turning left."
        ],
        correct: "The vehicle on the right.",
        explanation: "The driver on the left must let the driver on the right go first at intersections with no signs or lights."
    },
    {
        question: "You must park at least _ metres from a fire hydrant.",
        options: [
            "1",
            "2",
            "3",
            "5"
        ],
        correct: "3",
        explanation: "Do not park within three metres of a fire hydrant, on or within 100 metres of a bridge, or within six metres of a public entrance to a hotel, theatre, or public hall when it is open to the public."
    },
    {
        question: "Drivers must leave at least _ meters between them and cyclists",
        options: [
            "4.",
            "3.",
            "2.",
            "1."
        ],
        correct: "1.",
        explanation: "Failing to leave the required amount of space could result in a fine and 2 demerit points and jeopardize the safety of the cyclist. Also, opening a door of a parked vehicle into the path of a cyclist or traffic could result in 3 demerit points and a fine."
    },
    {
        question: "When using high-beam lights, when do you have to switch to low-beam lights?",
        options: [
            "Within 150m of oncoming vehicles.",
            "Within 50m of oncoming vehicles.",
            "You do not have to switch.",
            "If the oncoming car puts their high-beams on, you do not have to switch."
        ],
        correct: "Within 150m of oncoming vehicles.",
        explanation: "Use low-beam lights when you are less than 60m behind another vehicle and within 150m of an oncoming vehicle. Never use parking lights for driving. They are only for parking."
    },
    {
        question: "Drivers do not have to wear a seatbelt while:",
        options: [
            "Reversing",
            "Stopped in traffic",
            "Going less than 50 km/h",
            "They are pregnant"
        ],
        correct: "Reversing",
        explanation: "Drivers may remove their seatbelt while reversing in order to look behind them."
    }
];