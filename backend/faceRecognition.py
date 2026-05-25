import face_recognition
import json
import os

# READ STUDENTS
with open("temp/students.json", "r") as f:

    students = json.load(f)

known_encodings = []
known_students = []

# LOAD STUDENT IMAGES
for student in students:

    image_name = student.get("image")

    if not image_name:
        continue

    path = f"uploads/{image_name}"

    if not os.path.exists(path):
        continue

    try:

        image = face_recognition.load_image_file(path)

        encodings = face_recognition.face_encodings(image)

        if len(encodings) > 0:

            known_encodings.append(encodings[0])

            known_students.append(student)

    except Exception as e:

        print(e)

# LOAD CLASSROOM IMAGE
classroom = face_recognition.load_image_file(
    "temp/classroom.jpg"
)

faces = face_recognition.face_encodings(
    classroom
)

present_students = []

# MATCH
import numpy as np

import numpy as np

present_students = set()

# DETECT EVERY FACE
for face in faces:

    if len(known_encodings) == 0:
        continue

    # CALCULATE DISTANCES
    distances = face_recognition.face_distance(
        known_encodings,
        face
    )

    # FIND BEST MATCH
    best_match_index = np.argmin(
        distances
    )

    best_distance = distances[
        best_match_index
    ]

    # STRICT MATCH
    if best_distance < 0.45:

        matched_student = str(
            known_students[
                best_match_index
            ]["_id"]
        )

        # ADD UNIQUE STUDENT
        present_students.add(
            matched_student
        )

# FINAL JSON OUTPUT
print(
    json.dumps(
        list(present_students)
    )
)