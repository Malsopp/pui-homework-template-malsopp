let exerciseDictionary = {
    backSquat: {
        video: "./assets/backSquat.mp4",
        instructions: [
            "Back Squat:",
            "<li>1. Start with feet shoulder-width apart, barbell resting on your upper back.</li>",
            "<li>2. Keep your chest up and core engaged as you lower your hips back and down.</li>",
            "<li>3. Descend until your thighs are parallel to the ground.</li>",
            "<li>4. Drive through your heels to stand back up, extending hips and knees.</li>",
        ]
    },
    benchPress: {
        video: "./assets/benchPress.mp4",
        instructions: [
            "Bench Press:",
            "<li>1. Lie on your back on a flat bench, eyes under the bar.</li>",
            "<li>2. Grip the bar slightly wider than shoulder-width apart.</li>",
            "<li>3. Lower the bar to your chest, keeping elbows at a 90-degree angle.</li>",
            "<li>4. Press the bar back up to the starting position, arms fully extended.</li>",
        ]
    },
    overheadPress: {
        video: "./assets/overheadPress.mp4",
        instructions: [
            "Overhead Press:", 
            "<li>1. Stand with feet hip-width apart barbell at collarbone level.</li>", 
            "<li>2. Grip the bar with hands just wider than shoulder-width.</li>",
            "<li>3. Press the bar overhead, fully extending arms.</li>", 
            "<li>4. Keep core tight and avoid arching your back.</li>",
        ]
    },

    bentOverRow: {
        video: "./assets/bentOverRow.mp4",
        instructions: [
            "Bent Over Row:",
            "<li>1. Stand with feet shoulder-width apart, holding a barbell or dumbbells in front of you.</li>",
            "<li>2. Hinge at your hips, keeping your back straight and chest up.</li>",
            "<li>3. Pull the weight toward your lower chest, squeezing your shoulder blades together.</li>",
            "<li>4. Lower the weight back down with control.</li>",
        ]
    },

    plank: {
        video: "./assets/plank.mp4",
        instructions: [
            "Plank:", 
            "<li>1. Start in a push-up position with arms straight and shoulders over wrists.</li>",
            "<li>2. Engage your core, keeping your body in a straight line from head to heels.</li>",
            "<li>3. Hold the position, avoiding sagging hips or raised buttocks.</li>",
            "<li>4. Aim to maintain a strong plank form for the desired duration.</li>",
        ]
    },

    bicepCurls: {
        video: "./assets/bicepCurls.mp4",
        instructions: [
            "Bicep Curls:",
            "<li>1. Stand with a dumbbell in each hand, arms fully extended.</li>",
            "<li>2. Curl the weights toward your shoulders, keeping elbows close to your body.</li>",
            "<li>3. Lower the weights back down with control.</li>",
        ]
    },

    bulgarianSplitSquat: {
        video: "./assets/bulgarianSplitSquats.mp4",
        instructions: [
            "Bulgarian Split Squat:",
            "<li>1. Stand with one foot forward and the other foot behind on an elevated surface.</li>",
            "<li>2. Lower your body into a lunge, keeping the front knee above the ankle.</li>",
            "<li>3. Push back up to the starting position.</li>",
        ]
    },

    chestFlyMachine: {
        video: "./assets/chestFlyMachine.mp4",
        instructions: [
            "Chest Fly Machine:",
            "<li>1. Sit on the machine with back against the pad.</li>",
            "<li>2. Grasp the handles and bring them together in front of you, squeezing your chest.</li>",
            "<li>3. Return to the starting position with control.</li>",
        ]
    },

    deadlift: {
        video: "./assets/deadlift.mp4",
        instructions: [
            "Deadlift:",
            "<li>1. Stand with feet hip-width apart, holding a barbell in front of you.</li>",
            "<li>2. Hinge at your hips, lowering the barbell down your legs.</li>",
            "<li>3. Stand back up, extending hips and straightening your back.</li>",
        ]
    },

    gobletSquat: {
        video: "./assets/gobletSquat.mp4",
        instructions: [
            "Goblet Squat:",
            "<li>1. Hold a dumbbell or kettlebell close to your chest.</li>",
            "<li>2. Lower into a squat, keeping your chest up.</li>",
            "<li>3. Stand back up, fully extending hips and knees.</li>",
        ]
    },

    hammerCurls: {
        video: "./assets/hammerCurls.mp4",
        instructions: [
            "Hammer Curls:",
            "<li>1. Hold a dumbbell in each hand, palms facing your body.</li>",
            "<li>2. Curl the weights toward your shoulders.</li>",
            "<li>3. Lower the weights back down with control.</li>",
        ]
    },

    hipThrust: {
        video: "./assets/hipThrust.mp4",
        instructions: [
            "Hip Thrust:",
            "<li>1. Sit on the ground with a bench behind you, shoulders against the bench.</li>",
            "<li>2. Place a barbell on your hips and thrust upward, squeezing your glutes at the top.</li>",
            "<li>3. Lower your hips back down with control.</li>",
        ]
    },

    inclineBench: {
        video: "./assets/inclineBench.mp4",
        instructions: [
            "Incline Bench Press:",
            "<li>1. Lie on an incline bench, eyes under the bar.</li>",
            "<li>2. Grip the bar slightly wider than shoulder-width apart.</li>",
            "<li>3. Lower the bar to your chest, keeping elbows at a 90-degree angle.</li>",
        ]
    },

    lateralRaises: {
        video: "./assets/lateralRaises.mp4",
        instructions: [
            "Lateral Raises:",
            "<li>1. Hold a dumbbell in each hand, arms by your sides.</li>",
            "<li>2. Lift the weights out to the sides until they reach shoulder height.</li>",
            "<li>3. Lower the weights back down with control.</li>",
        ]
    },

    latPulldown: {
        video: "./assets/latPulldown.mp4",
        instructions: [
            "Lat Pulldown:",
            "<li>1. Sit at a lat pulldown machine with a wide grip on the bar.</li>",
            "<li>2. Pull the bar down to your chest, squeezing your shoulder blades together.</li>",
            "<li>3. Slowly release the bar back up with control.</li>",
        ]
    },

    legExtension: {
        video: "./assets/legExtension.mp4",
        instructions: [
            "Leg Extension:",
            "<li>1. Sit on a leg extension machine with your legs under the pad.</li>",
            "<li>2. Extend your legs, lifting the weight until your legs are straight.</li>",
            "<li>3. Lower the weight back down with control.</li>",
        ]
    },

    legPress: {
        video: "./assets/legPress.mp4",
        instructions: [
            "Leg Press:",
            "<li>1. Sit on a leg press machine with feet on the platform.</li>",
            "<li>2. Push the platform away by extending your knees.</li>",
            "<li>3. Bend your knees to bring the platform back toward you.</li>",
        ]
    },

    oneArmRowMachine: {
        video: "./assets/oneArmRowMachine.mp4",
        instructions: [
            "One-Arm Row Machine:",
            "<li>1. Sit at a row machine with one hand gripping the handle.</li>",
            "<li>2. Pull the handle toward your lower chest, squeezing your shoulder blades.</li>",
            "<li>3. Release the handle back with control.</li>",
        ]
    },

    rdl: {
        video: "./assets/rdl.mp4",
        instructions: [
            "RDL (Romanian Deadlift):",
            "<li>1. Stand with feet hip-width apart, holding a barbell in front of you.</li>",
            "<li>2. Hinge at your hips, keeping your back straight and chest up.</li>",
            "<li>3. Lower the barbell toward the ground while maintaining a slight bend in your knees.</li>",
            "<li>4. Stand back up, fully extending hips and straightening your back.</li>",
        ]
    },

    rearDeltFly: {
        video: "./assets/rearDeltFly.mp4",
        instructions: [
            "Rear Delt Fly:",
            "<li>1. Hold a dumbbell in each hand, bend at your hips, and let the weights hang down.</li>",
            "<li>2. Lift the weights out to the sides, keeping your arms straight.</li>",
            "<li>3. Squeeze your shoulder blades together at the top of the movement.</li>",
            "<li>4. Lower the weights back down with control.</li>",
        ]
    },

    russianTwist: {
        video: "./assets/russianTwist.mp4",
        instructions: [
            "Russian Twist:",
            "<li>1. Sit on the ground with your knees bent and lean back slightly.</li>",
            "<li>2. Hold a weight or medicine ball with both hands and rotate side to side.</li>",
            "<li>3. Touch the ground beside you with the weight on each side.</li>",
            "<li>4. Keep your core engaged throughout the movement.</li>",
        ]
    },

    sumoSquat: {
        video: "./assets/sumoSquat.mp4",
        instructions: [
            "Sumo Squat:",
            "<li>1. Stand with feet wider than shoulder-width apart and toes pointed outward.</li>",
            "<li>2. Lower into a squat, keeping your chest up and knees tracking over toes.</li>",
            "<li>3. Stand back up, fully extending hips and knees.</li>",
            "<li>4. Repeat the movement while maintaining good form.</li>",
        ]
    },

    tricepExtensions: {
        video: "./assets/tricepExtensions.mp4",
        instructions: [
            "Tricep Extensions:",
            "<li>1. Stand or sit with a dumbbell overhead, holding it with both hands.</li>",
            "<li>2. Lower the weight behind your head by bending at the elbows.</li>",
            "<li>3. Extend your arms to lift the weight back up above your head.</li>",
            "<li>4. Keep your elbows close to your head throughout the movement.</li>",
        ]
    },   
    
    seatedLegCurl: {
        video: "./assets/seatedLegCurl.mp4",
        instructions: [
            "Seated Leg Curl:",
            "<li>1. Sit at a leg curl machine with your legs under the pad.</li>",
            "<li>2. Curl the pad towards your glutes by flexing your knees.</li>",
            "<li>3. Lower the pad back down with control.</li>",
            "<li>4. Maintain a slow and controlled pace during the exercise.</li>",
        ]
    }
};