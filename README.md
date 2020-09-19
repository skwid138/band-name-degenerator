# Band Name Degenerator

My best friend and I have a giant list of names we think would be great to use as band or artist names. This is a little project to play with firebase as well as pull from that list to get a random name.

___

## WIP: Features

### Data
- Get list of all bands
- Get random band
- Get the total number of bands in the database
- Search for a band
  - This could be by name, date, user, etc.
- Last band(s) added
  - This could literally be the very last band added or last 5, 10, etc.
- Band of the week 
  - The criteria for this is TBD

### User tools
- Adding new names to the list
- Editing names previously added to the list
- Comment on names already in the list or while adding a new name
- Assign a 1-5 rating to a name OR ability to like or dislike/up vote or down vote

## Database

### Scheme

The document fields followed by an * are stretch goals

- bands (Collection)
  - name (required string: the band name) (Document)
    - user (required string: document ID for the user who created the record)
    - date_added (required timestamp: when the record was created)
    - related_band (optional string: document ID for the band that inspired this record)
    - comments* (optional array: of comments)
      - comment (string: comment from a user)
    - date_modified* (optional timestamp: when the record was last edited)
    - ratings* (optional array: of numerical ratings)
      - rating (optional number: 1-5)
    - votes_up* (optional number: incrimented when clicked) _note: without tracking the user voting multiple votes could be cast by the same user_ 
    - votes_down* (optional number: incrimented when clicked) _note: without tracking the user voting multiple votes could be cast by the same user_ 
- users (Collection)
  - name (required string: the user's name) (Document)
    - bands_created (required number: the total amount of band records the user has created)