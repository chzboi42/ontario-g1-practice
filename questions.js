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
    },
    {
        question: "How often do you have to renew your driver's license?",
        options: [
            "Every 3 years",
            "You don't need to, as you already have passed.",
            "Every 5 years.",
            "Every 10 years."
        ],
        correct: "Every 5 years.",
        explanation: "You will receive a renewal application or renewal postcard in the mail before your licence expires. If you do not, you are still responsible for ensuring you have a valid driver's license that has not expired."
    },
{
        question: "When checking for a proper driving position, how far in front of the vehicle should you be able to see the ground?",
        options: [
            "2 metres.",
            "4 metres.",
            "6 metres.",
            "10 metres."
        ],
        correct: "4 metres.",
        explanation: "You should sit high enough in the driver’s seat to see over the steering wheel and hood, allowing you to see the ground four metres in front of the vehicle."
    },
    {
        question: "An infant weighing less than 9 kg (20 lbs.) must be secured in which type of child car seat?",
        options: [
            "A booster seat with a lap belt.",
            "A forward-facing child car seat with a tether strap.",
            "A rear-facing child car seat attached by a seatbelt or UAS strap.",
            "An adult seatbelt in the back seat."
        ],
        correct: "A rear-facing child car seat attached by a seatbelt or UAS strap.",
        explanation: "Infants who weigh less than 9 kilograms (20 lbs.) must be buckled into a rear-facing child car seat, which is always best installed in the back seat."
    },
    {
        question: "What is the correct way to adjust your side mirrors to minimize blind spots?",
        options: [
            "Adjust them so you can see half of your own vehicle at all times.",
            "Lean towards the window for the left mirror, and lean to the centre for the right mirror, adjusting until you can just see the rear of your car.",
            "Point them straight down toward the rear tires.",
            "Adjust them so they show the exact same view as your interior rearview mirror."
        ],
        correct: "Lean towards the window for the left mirror, and lean to the centre for the right mirror, adjusting until you can just see the rear of your car.",
        explanation: "Leaning while adjusting helps spread out the mirrors' angles to avoid overlap, though turning your head for a shoulder check is still the only way to be 100% sure your blind spots are clear."
    },
    {
        question: "When following behind another vehicle, you must switch from high-beam to low-beam headlights when you are within:",
        options: [
            "30 metres.",
            "60 metres.",
            "150 metres.",
            "200 metres."
        ],
        correct: "60 metres.",
        explanation: "You must switch to low beams within 150 metres of an oncoming vehicle, and when you are less than 60 metres behind another vehicle you are following."
    },
    {
        question: "How often should you check your mirrors as part of a safe driving routine?",
        options: [
            "Every 5 seconds or so.",
            "Every 15 seconds.",
            "Only when changing lanes.",
            "Every 30 seconds."
        ],
        correct: "Every 5 seconds or so.",
        explanation: "Always be aware of traffic around you. Develop a routine for looking ahead, behind, and from side to side, which includes checking your mirrors every five seconds or so."
    },
    {
        question: "When a police officer requests your documents during a traffic stop, how long do you have to present them?",
        options: [
            "You have 24 hours to bring them to a police station.",
            "You must surrender them immediately upon request.",
            "You have 48 hours if you have a clean driving record.",
            "You only need to show your digital driver's licence within 12 hours."
        ],
        correct: "You must surrender them immediately upon request.",
        explanation: "Contrary to popular belief, you do not have 24 hours to present your driver's licence, vehicle permit, and insurance. You must surrender them immediately upon the police officer's request."
    },
    {
        question: "Under ideal driving conditions, what is the minimum safe following distance behind another vehicle?",
        options: [
            "At least one second.",
            "At least two seconds.",
            "At least three seconds.",
            "At least four seconds."
        ],
        correct: "At least two seconds.",
        explanation: "A safe following distance under ideal conditions is at least two seconds behind the vehicle in front of you. You can measure this using a fixed roadside marker."
    },
    {
        question: "When a municipal bus in a bus bay has its left-turn signal flashing to indicate it is ready to re-enter traffic, what must you do if you are in the adjacent lane?",
        options: [
            "Maintain your speed and pass the bus quickly.",
            "Sound your horn to warn the bus driver you are there.",
            "Yield the right-of-way and allow the bus to re-enter traffic.",
            "Change lanes to the left immediately without slowing down."
        ],
        correct: "Yield the right-of-way and allow the bus to re-enter traffic.",
        explanation: "When a bus in a bus bay begins flashing its left-turn signals, indicating that it is ready to leave the bus bay, drivers approaching in the lane adjacent to the bus bay must allow the bus to re-enter traffic."
    },
    {
        question: "What does an orange and red triangular sign on the rear of a vehicle mean?",
        options: [
            "The vehicle is carrying dangerous goods.",
            "The vehicle is a slow-moving vehicle travelling at 40 km/h or less.",
            "The vehicle has broken down and is waiting for a tow truck.",
            "The vehicle has wide or oversized cargo."
        ],
        correct: "The vehicle is a slow-moving vehicle travelling at 40 km/h or less.",
        explanation: "Farm machinery and horse-drawn vehicles must display an orange and red slow-moving vehicle sign on the rear. This warns other drivers that the vehicle travels at a maximum speed of 40 km/h or less."
    },
    {
        question: "When a school bus is stopped with its overhead amber lights flashing, what should approaching drivers do?",
        options: [
            "Speed up to pass the bus before the red lights come on.",
            "Slow down and prepare to stop.",
            "Stop immediately, even if the red lights are not flashing yet.",
            "Maintain their current speed and drive past with caution."
        ],
        correct: "Slow down and prepare to stop.",
        explanation: "Flashing overhead amber lights indicate that the school bus is coming to a stop to pick up or drop off passengers. Drivers must slow down and prepare to stop."
    },
    {
        question: "At an intersection with stop signs at all four corners, two vehicles come to a complete stop at the exact same time. Who must yield the right-of-way?",
        options: [
            "The vehicle on the right must yield to the vehicle on the left.",
            "The vehicle on the left must yield to the vehicle on the right.",
            "The larger vehicle has the right-of-way.",
            "The vehicle going straight must yield to the vehicle turning left."
        ],
        correct: "The vehicle on the left must yield to the vehicle on the right.",
        explanation: "At an all-way stop, if two vehicles stop at the same time, the driver on the left must yield the right-of-way to the driver on the right."
    },
    {
        question: "What must you do when entering a public road from a private road or a driveway?",
        options: [
            "Maintain your speed and merge quickly into traffic.",
            "Yield the right-of-way only to vehicles on the road, as pedestrians must wait for you.",
            "Yield the right-of-way to both vehicles on the road and pedestrians on the sidewalk.",
            "Sound your horn to alert others that you are exiting the driveway."
        ],
        correct: "Yield the right-of-way to both vehicles on the road and pedestrians on the sidewalk.",
        explanation: "When entering a road from a private road or driveway, you must yield the right-of-way to any oncoming vehicles on the road as well as pedestrians crossing across your path on the sidewalk."
    },
    {
        question: "If there is no marked stop line or crosswalk at a red light or stop sign, where must you bring your vehicle to a stop?",
        options: [
            "At the edge of the sidewalk.",
            "Two metres past the intersection edge.",
            "Wherever you have the best view of cross traffic.",
            "Directly in the middle of the intersection."
        ],
        correct: "At the edge of the sidewalk.",
        explanation: "If there is no stop line, stop at the crosswalk (marked or not). If there is no crosswalk, stop at the edge of the sidewalk. If there is no sidewalk, stop at the edge of the intersection."
    },
    {
        question: "When a train is approaching a railway crossing, you must stop your vehicle at least how far from the nearest rail or gate?",
        options: [
            "At least 2 metres away.",
            "At least 5 metres away.",
            "At least 15 metres away.",
            "At least 20 metres away."
        ],
        correct: "At least 5 metres away.",
        explanation: "If a train is coming, you must stop at least five metres from the nearest rail or gate, and you must not cross until you are certain the train or trains have completely passed."
    },
    {
        question: "What is the penalty for a first offence of failing to stop for a stopped school bus with its red lights flashing?",
        options: [
            "A substantial fine and 2 demerit points.",
            "A substantial fine and 3 demerit points.",
            "A heavy fine and 6 demerit points.",
            "An immediate 90-day roadside licence suspension."
        ],
        correct: "A heavy fine and 6 demerit points.",
        explanation: "It is illegal and highly dangerous to pass a stopped school bus with its red lights flashing. A first offence results in a heavy fine and 6 demerit points."
    },
    {
        question: "When approaching a pedestrian crossover, within how many metres is it illegal to pass another vehicle?",
        options: [
            "Within 10 metres.",
            "Within 20 metres.",
            "Within 30 metres.",
            "Within 50 metres."
        ],
        correct: "Within 30 metres.",
        explanation: "To ensure the safety of pedestrians crossing the roadway, you must not pass any vehicle within 30 metres of a pedestrian crossover."
    },
    {
        question: "When waiting in an intersection to make a left turn, which way should your front wheels be pointed?",
        options: [
            "To the left, anticipating the turn.",
            "Straight ahead.",
            "To the right, to stay close to the curb.",
            "It does not matter as long as your foot is on the brake."
        ],
        correct: "Straight ahead.",
        explanation: "Never turn your steering wheel to the left until you are ready to complete the turn. If your wheels are turned left while stopped and you are hit from behind, your vehicle could be pushed into oncoming traffic."
    },
    {
        question: "Which lane should you use when entering a roundabout if you intend to turn left at one of the exits?",
        options: [
            "The right lane.",
            "The left lane.",
            "Either the left or right lane.",
            "The shoulder or apron lane."
        ],
        correct: "The left lane.",
        explanation: "As you approach a roundabout, you choose your lane just like a regular intersection. Use the left lane to turn left or go straight. Never enter from the right lane if you want to turn left."
    },
    {
        question: "If an emergency vehicle approaches while you are driving inside a roundabout, what should you do?",
        options: [
            "Stop immediately inside the roundabout to let them pass.",
            "Exit at your intended exit and proceed beyond the traffic island before pulling over.",
            "Accelerate to stay ahead of the emergency vehicle.",
            "Pull over onto the central island apron inside the roundabout."
        ],
        correct: "Exit at your intended exit and proceed beyond the traffic island before pulling over.",
        explanation: "If you are already inside a roundabout when an emergency vehicle approaches, do not stop inside. Exit at your intended exit first, clear the traffic island, and then pull over to the right."
    },
    {
        question: "On which type of road is it illegal to drive a vehicle in reverse, including on the shoulder?",
        options: [
            "Any road inside a city, town, or village.",
            "A one-way street.",
            "A divided road with a speed limit of more than 80 km/h.",
            "A school zone during school hours."
        ],
        correct: "A divided road with a speed limit of more than 80 km/h.",
        explanation: "It is illegal to drive in reverse on a divided road that has a speed limit of more than 80 km/h. This applies to both the travelled lanes and the shoulder, unless you are assisting someone in trouble."
    },
    {
        question: "When performing a U-turn or a three-point turn, you must be able to see at least how far in both directions?",
        options: [
            "50 metres.",
            "100 metres.",
            "150 metres.",
            "200 metres."
        ],
        correct: "150 metres.",
        explanation: "It is illegal to make a U-turn or a three-point turn on curves, hills, or near railway crossings/tunnels that block your view. You must have a clear view of at least 150 metres in both directions."
    },
    {
        question: "When performing a three-point turn, what is the correct sequence of actions after pulling over to the far right side of the road?",
        options: [
            "Signal right, back up across the road, shift to forward gear, and drive away.",
            "Signal left and drive forward sharply left; stop, shift to reverse and signal right while backing up; stop, shift to forward gear and drive away.",
            "Signal left, reverse sharply to the left curb, shift to forward gear, and turn right.",
            "Drive forward to the left curb, back up straight without signaling, and turn sharply left."
        ],
        correct: "Signal left and drive forward sharply left; stop, shift to reverse and signal right while backing up; stop, shift to forward gear and drive away.",
        explanation: "A three-point turn starts from the far right side of the road. You signal left and turn sharply left to the opposite curb. Then, you shift into reverse, signal right, and back up toward the other side. Finally, you shift to a forward gear and drive away when the way is clear."
    },
    {
        question: "When passing a vehicle, when is it safe to signal and move back into your original lane?",
        options: [
            "As soon as you clear the other vehicle's front bumper.",
            "When you can see the entire front of the vehicle you passed in your inside rearview mirror.",
            "When the driver behind you flashes their headlights.",
            "After you have driven at least three car lengths ahead."
        ],
        correct: "When you can see the entire front of the vehicle you passed in your inside rearview mirror.",
        explanation: "To ensure you do not cut off the vehicle you just passed, you must wait until you can see their entire front end in your inside rearview mirror before signaling and steering back into the lane."
    },
    {
        question: "Under what conditions are you allowed to drive on the right shoulder to pass another vehicle?",
        options: [
            "Whenever traffic is heavy and the vehicle in front is moving too slowly.",
            "Only to pass a vehicle turning left, and only if the shoulder is paved.",
            "To pass any turning vehicle, whether the shoulder is paved or gravel.",
            "It is never legal to drive or pass on the shoulder."
        ],
        correct: "Only to pass a vehicle turning left, and only if the shoulder is paved.",
        explanation: "In Ontario, you may drive on the right shoulder only to pass a vehicle that is turning left, and this is only permitted if the shoulder is completely paved. Passing on the left shoulder is always illegal."
    },
    {
        question: "When a streetcar is stopped to pick up or drop off passengers where there is no safety zone, how much space must you leave?",
        options: [
            "Stop at least two metres behind the rear doors of the streetcar.",
            "Stop at least five metres behind the front doors of the streetcar.",
            "Pass on the left side with one metre of clearance.",
            "Slow down to 10 km/h and pass carefully on the right."
        ],
        correct: "Stop at least two metres behind the rear doors of the streetcar.",
        explanation: "At streetcar stops without a designated passenger safety island, you must stop at least two metres behind the rear doors where passengers are getting on or off."
    },
    {
        question: "What are the correct distance rules when parking near a fire hydrant or an intersection controlled by traffic lights?",
        options: [
            "Do not park within 3 metres of a fire hydrant or within 15 metres of a traffic-light controlled intersection.",
            "Do not park within 5 metres of a fire hydrant or within 9 metres of a traffic-light controlled intersection.",
            "Do not park within 6 metres of a fire hydrant or within 15 metres of a traffic-light controlled intersection.",
            "Do not park within 3 metres of a fire hydrant or within 30 metres of a traffic-light controlled intersection."
        ],
        correct: "Do not park within 3 metres of a fire hydrant or within 15 metres of a traffic-light controlled intersection.",
        explanation: "According to basic parking rules, you must not park within 3 metres of a fire hydrant, and you must not park within 15 metres of an intersection if it is controlled by traffic lights."
    },
    {
        question: "When parking facing uphill next to a curb, how should you position your vehicle's front wheels?",
        options: [
            "Turn the front wheels sharply to the right (toward the curb).",
            "Keep the front wheels straight ahead.",
            "Turn the front wheels to the left (toward the road).",
            "It does not matter as long as the parking brake is set."
        ],
        correct: "Turn the front wheels to the left (toward the road).",
        explanation: "When facing uphill with a curb, turning the steering wheel to the left causes the tires to catch the curb and prevent the vehicle from rolling backward into traffic if the brakes fail."
    },
    {
        question: "When pulling over for a short roadside stop, what is the maximum allowable distance your vehicle should be from the curb or edge of the road?",
        options: [
            "No more than 15 centimetres away.",
            "No more than 30 centimetres away.",
            "No more than 45 centimetres away.",
            "No more than 60 centimetres away."
        ],
        correct: "No more than 30 centimetres away.",
        explanation: "When steering to the side of the road for a short stop, you should steadily reduce speed and bring your vehicle to a stop parallel to and within approximately 30 centimetres of the curb or edge."
    },
];