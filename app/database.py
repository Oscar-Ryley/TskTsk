from sqlite3 import connect
conn = connect("data.db")
cursor = conn.cursor()

def create_table():
	try:
		cursor.execute("CREATE TABLE tblTask (TaskID UNSIGNED INTEGER(8), Name TEXT, Length UNSIGNED INTEGER(8), Completed UNSIGNED INTEGER(8), Done BOOLEAN NOT NULL, PRIMARY KEY (TaskID))")
	except:
		#tables have already been created
		pass

#cursor.execute("""DROP TABLE IF EXISTS tblTask""")
create_table()