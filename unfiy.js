
        // JavaScript to handle comments
        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var commentText = document.getElementById('comment').value;
            var commentSection = document.getElementById('commentSection');

            // Create a new comment element
            var comment = document.createElement('div');
            comment.classList.add('comment');
            comment.innerHTML = '<strong>' + 'Anonymous' + '</strong>: ' + commentText;

            // Append the new comment to the comment section
            commentSection.appendChild(comment);

            // Clear the textarea
            document.getElementById('comment').value = '';
        });