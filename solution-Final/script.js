// Get all exercise lists
const exerciseLists = document.querySelectorAll('.exerciseList');

// Iterate through each exercise list
exerciseLists.forEach((exerciseList) => {

    // Get all list items in the current exercise list
    const listItems = exerciseList.querySelectorAll('li');
    
    const day = exerciseList.getAttribute("id"); // return the id name of the list
    // Iterate through each list item and add a checkbox
    listItems.forEach((item, index) => {
        const checkboxId = `checkbox${index + 1}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = checkboxId;
        if (day == "exerciseListOne") {
            checkbox.classList.add("checkboxListOne");
        } else if (day == "exerciseListTwo") {
            checkbox.classList.add("checkboxListTwo");
        } else if (day == "exerciseListThree") {
            checkbox.classList.add("checkboxListThree");
        }

        const label = document.createElement('label');
        label.htmlFor = checkboxId;
        label.dataset.video = item.dataset.video; // Copy data-video attribute

        // Move existing content from the list item to the label
        while (item.firstChild) {
            label.appendChild(item.firstChild);
        }

        // Append the checkbox and label to the list item
        item.appendChild(checkbox);
        item.appendChild(label);

        // Add an event listener to each checkbox
        checkbox.addEventListener('change', function (event) {

        // Call the checkCompletion function when any checkbox changes
        checkCompletion();

            // If the checkbox is checked, display the video
            if (checkbox.checked) {
                const videoKey = label.dataset.video;
                if (exerciseDictionary.hasOwnProperty(videoKey)) {
                    const exercise = exerciseDictionary[videoKey];
                    videoElement.style.display = 'block';
                    descriptionList.style.display = 'block';
                    videoElement.src = exercise.video;
                    videoElement.load();
                    videoElement.play();
                    descriptionList.innerHTML = exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('');

                    // Open the workout modal
                        openWorkoutModal();
                }
            } else {
                // If the checkbox is unchecked, hide the video and description
                videoElement.style.display = 'none';
                descriptionList.style.display = 'none';
            }
        });
    });
});

// Function to open the workout modal
function openWorkoutModal() {
    const workoutModal = document.getElementById('workoutModal');
    const modalContent = document.querySelector('#workoutModal .modal-content');
    workoutModal.style.display = 'block';
    modalContent.style.display = 'block';  
}

// Function to close the workout modal
function closeWorkoutModal() {
    const workoutModal = document.getElementById('workoutModal');
    workoutModal.style.display = 'none';
}

// Attach the closeWorkoutModal function to elements with the class 'closeWorkout'
const closeWorkoutButtons = document.querySelectorAll('.closeWorkout');
closeWorkoutButtons.forEach(button => {
    button.addEventListener('click', closeWorkoutModal);
});


// Function to open the completion modal
function openCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'block';
}

// Function to check completion
function checkCompletion() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const list1 = [];
    const list2 = [];
    const list3 = [];
    for (i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i]);
        if (checkboxes[i].className === "checkboxListOne") {
            list1.push(checkboxes[i]);
            console.log(list1);
        } else if (checkboxes[i].className === "checkboxListTwo") {
            list2.push(checkboxes[i]);
        } else if (checkboxes[i].className === "checkboxListThree") {
            list3.push(checkboxes[i]);
        }
    }

    lists = [list1, list2, list3];
    console.log(lists);
    for (let i = 0; i < lists.length; i++) {
        const currentList = lists[i];
        if (currentList.length === 5 && currentList.every(checkbox => checkbox.checked)) {
            // Show the completion modal after 3 seconds
            setTimeout(() => {
                openCompletionModal();
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    }

}

// Function to close the completion modal
function closeCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'none';
}


// Wait for the document to be ready
$(document).ready(function() {
    // Select the element to slide in
    var slideInElement = $('.slide-in-text');
  
    // Function to slide in the text
    function slideIn() {
      slideInElement.css({
        'opacity': 1,
        'transform': 'translateX(0)'
      });
    }
  
    // Call the slideIn function after a delay (e.g., 1 second)
    setTimeout(slideIn, 1000);
  });