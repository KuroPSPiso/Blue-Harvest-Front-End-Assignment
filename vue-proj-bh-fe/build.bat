@echo on
CMD /C "npm run build"
xcopy ".\dist\*" "..\" /e /q
rmdir ".\dist" /s /q