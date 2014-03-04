@ECHO OFF

SET Server=wamp

CALL %~dp0\tools\deploy.bat
IF NOT "%ERRORLEVEL%"=="0" PAUSE

IF "%Server%"=="wamp" (
	START chrome http://localhost/bootplate/
	GOTO :EOF
)

IF "%Server%"=="http-server" (
	SET Port=8000
	SET Base=%~dp0\deploy\bootplate\
	START chrome http://localhost:%Port%
	CALL http-server.cmd %Base% -p %Port%
	GOTO :EOF
)